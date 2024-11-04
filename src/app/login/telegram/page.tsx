"use client";
import GameSelectionUI from "@/components/AuthPage";
import { Suspense, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useConnect } from "thirdweb/react";
import { client, wallet } from "@/app/constant";
import { Loader2 } from 'lucide-react';

interface LoginParams {
    signature: string;
    message: string;
}

interface TelegramLoginContentProps {
    searchParams: LoginParams;
}

function TelegramLoginContent({ searchParams }: TelegramLoginContentProps) {
    const { connect } = useConnect();
    
    console.log('SearchParams in TelegramLoginContent:', searchParams);

    useQuery({
        queryKey: ["telegram-login", searchParams.signature, searchParams.message],
        queryFn: async () => {
            if (!searchParams.signature || !searchParams.message) {
                console.error('Missing signature or message');
                return false;
            }
            try {
                await connect(async () => {
                    await wallet.connect({
                        client,
                        strategy: "auth_endpoint",
                        payload: JSON.stringify({
                            signature: searchParams.signature,
                            message: searchParams.message,
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
        enabled: !!searchParams.signature && !!searchParams.message,
    });

    return (
        <div className="w-screen h-screen flex flex-col gap-2 items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-white" />
            Generating wallet...
        </div>
    );
}

interface TelegramLoginProps {
    searchParams: LoginParams;
}

export default function TelegramLogin({ searchParams }: TelegramLoginProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedGame, setSelectedGame] = useState("");

    console.log('SearchParams in TelegramLogin:', searchParams);

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
                <TelegramLoginContent searchParams={searchParams} />
                <GameSelectionUI
                    isLoading={isLoading}
                    selectedGame={selectedGame}
                    onGameSelect={handleRedirect}
                />
            </Suspense>
        </>
    );
}