"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";


export default function TelegramLogin({
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center">Telegram Login Successful</h1>
        <p className="mb-6 text-center">Choose a game to continue:</p>
        <div className="space-y-4">
          <button 
            onClick={() => handleRedirect("unity")}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading && selectedGame === "unity" ? "Redirecting..." : "Continue to Unity Game 1"}
          </button>
          <button 
            onClick={() => handleRedirect("unity2")}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading && selectedGame === "unity2" ? "Redirecting..." : "Continue to Unity Game 2"}
          </button>
        </div>
      </div>
    </div>
  );
}