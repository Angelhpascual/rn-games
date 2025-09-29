import { Game } from "@/src/domain/entities/Game"
import { getAllGamesUseCase } from "@/src/infrastructure/di/container"
import { useEffect, useState } from "react"

export function useAllGames() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    getAllGamesUseCase
      .execute()
      .then((result) => {
        if (mounted) {
          setGames(result)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (mounted) {
          const message = err instanceof Error ? err.message : String(err)
          setError(message)
          setLoading(false)
        }
      })
    return () => {
      mounted = false
    }
  }, [])
  return { games, loading, error }
}
