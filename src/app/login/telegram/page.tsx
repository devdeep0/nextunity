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

  const handleRedirect = useCallback(() => {
    setIsLoading(true);
    const payload = JSON.stringify({
      signature: searchParams.signature,
      message: searchParams.message,
    });
    router.push(`/unity?payload=${encodeURIComponent(payload)}`);
  }, [searchParams.signature, searchParams.message, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center">Telegram Login Successful</h1>
        <p className="mb-6 text-center">game 1</p>
        <button 
          onClick={handleRedirect}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Redirecting..." : "play"}
        </button>
      </div>
    </div>
  );
}