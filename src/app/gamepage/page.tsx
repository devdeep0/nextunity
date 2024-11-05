"use client"
import { useState, useCallback, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import GameSelectionUI from "@/components/AuthPage"


export default function GamePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedGame, setSelectedGame] = useState("")
  const [error, setError] = useState<string | null>(null)

  // Get params from URL on component mount
  const signature = searchParams.get("signature")
  const message = searchParams.get("message")

  // Validate required parameters
  useEffect(() => {
    if (!signature || !message) {
      setError("Missing required authentication parameters")
      // Optionally redirect to login
      // router.push('/login')
    }
  }, [signature, message])

  const handleRedirect = useCallback(
    (game: string) => {
      try {
        setIsLoading(true)
        setSelectedGame(game)

        if (!signature || !message) {
          throw new Error("Authentication parameters are required")
        }

        const payload = JSON.stringify({
          signature,
          message,
        })

        router.push(`/${game}?payload=${encodeURIComponent(payload)}`)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
        setIsLoading(false)
      }
    },
    [signature, message, router]
  )

  // If there's an error, show it
  

  return (
    <GameSelectionUI
      isLoading={isLoading}
      selectedGame={selectedGame}
      onGameSelect={handleRedirect}
    />
  )
}