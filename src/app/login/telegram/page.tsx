"use client";
import GameSelectionUI from "@/components/AuthPage";
import { Suspense, useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useConnect } from "thirdweb/react";
import { client, wallet } from "@/app/constant";
import { Loader2 } from 'lucide-react';

interface TelegramLoginProps {
    signature: string;
    message: string;
}

function TelegramLoginContent({ signature, message }: TelegramLoginProps) {
    const { connect } = useConnect();
    const router = useRouter();
    
    console.log('SearchParams in TelegramLoginContent:', { signature, message });

    useQuery({
        queryKey: ["telegram-login", signature, message],
        queryFn: async () => {
            if (!signature || !message) {
                console.error('Missing signature or message');
                return false;
            }
            try {
                await connect(async () => {
                    await wallet.connect({
                        client,
                        strategy: "auth_endpoint",
                        payload: JSON.stringify({
                            signature,
                            message,
                        }),
                        encryptionKey: process.env.NEXT_PUBLIC_AUTH_PHRASE as string,
                    });
                    return wallet;
                });
                return true;
            } catch (error) {
                console.error('Connection error:', error);
                return false;
            }
        },
        enabled: !!signature && !!message,
    });

    return (
        <div className="w-screen h-screen flex flex-col gap-2 items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-white" />
            Generating wallet...
        </div>
    );
}

interface BinanceLoginProps {
    searchParams: {
        signature: string;
        message: string;
    };
}

export default function BinanceLogin({ searchParams }: BinanceLoginProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedGame, setSelectedGame] = useState("");

    console.log('SearchParams in BinanceLogin:', searchParams);

    const handleRedirect = useCallback((game: string) => {
        setIsLoading(true);
        setSelectedGame(game);
        const payload = JSON.stringify({
            signature: searchParams.signature,
            message: searchParams.message,
        });
        router.push(`/${game}?payload=${encodeURIComponent(payload)}`);
    }, [searchParams.signature, searchParams.message, router]);

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <TelegramLoginContent 
                    signature={searchParams.signature} 
                    message={searchParams.message}
                />
                <GameSelectionUI
                    isLoading={isLoading}
                    selectedGame={selectedGame}
                    onGameSelect={handleRedirect}
                />
            </Suspense>
        </>
    );
}