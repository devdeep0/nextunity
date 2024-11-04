"use client";
import GameSelectionUI from "@/components/AuthPage";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useConnect } from "thirdweb/react";
import { client, wallet } from "@/app/constant";
import { Loader2 } from "lucide-react";

function TelegramLoginContent() {
    const searchParams = useSearchParams();
    const { connect } = useConnect();
    const router = useRouter();
    const [params, setParams] = useState({ signature: '', message: '' });

    useEffect(() => {
        const signature = searchParams.get('signature') || '';
        const message = searchParams.get('message') || '';
        setParams({ signature, message });
        console.log('SearchParams:', { signature, message });
    }, [searchParams]);

    useQuery({
        queryKey: ["telegram-login", params.signature, params.message],
        queryFn: async () => {
            if (!params.signature || !params.message) {
                console.error('Missing signature or message');
                return false;
            }
            try {
                await connect(async () => {
                    await wallet.connect({
                        client,
                        strategy: "auth_endpoint",
                        payload: JSON.stringify({
                            signature: params.signature,
                            message: params.message,
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
        enabled: !!params.signature && !!params.message,
    });

    return (
        <div className="w-screen h-screen flex flex-col gap-2 items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-white" />
            Generating wallet...
        </div>
    );
}


export default function BinanceLogin({
  searchParams,
}: {
  searchParams: { signature: string; message: string };
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGame, setSelectedGame] = useState("");

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
            <TelegramLoginContent />
        </Suspense>
<GameSelectionUI
 isLoading={isLoading}
 selectedGame={selectedGame}
 onGameSelect={handleRedirect}
/>
   </>
  );
}