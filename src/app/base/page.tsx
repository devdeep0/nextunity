"use client";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Base from "@/components/Base";
import Error from "next/error";

export default function BasePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGame, setSelectedGame] = useState("");
  const [error, setError] = useState<Error | null>(null);
  const [signature, setSignature] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchSignature = async () => {
      try {
        const response = await fetch('/api/auth/telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: 'user' }), // Replace with actual username if available
        });

        

        const data = await response.json();
        setSignature(data.signature);
        setMessage(data.message);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching signature:", err);
        setIsLoading(false);
      }
    };

    fetchSignature();
  }, []);

  const handleRedirect = useCallback((game: string) => {
    try {
      setIsLoading(true);
      setSelectedGame(game);
      
      const payload = JSON.stringify({ signature, message });
      router.push(`/${game}?payload=${encodeURIComponent(payload)}`);
    } catch (err) {
      console.error("Error in handleRedirect:", err);

      setIsLoading(false);
    }
  }, [signature, message, router]);

 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Base
      isLoading={isLoading}
      selectedGame={selectedGame}
      onGameSelect={handleRedirect}
    />
  );
}