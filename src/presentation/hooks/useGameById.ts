import { Game } from "@/src/domain/entities/Game"
import { getGameByIdUseCase } from "@/src/infrastructure/di/container"
import { useEffect, useState } from "react"

export function useGameById(id?: number) {
  const [game, setGame] = useState<Game | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    if (id == null || Number.isNaN(id)) {
      setGame(null)
      setLoading(false)
      setError(null)
      return () => {
        mounted = false
      }
    }

    setLoading(true)
    setError(null)
    setGame(null)

    getGameByIdUseCase
      .execute(id)
      .then((result) => {
        if (mounted) {
          setGame(result)
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
  }, [id])
  return { game, loading, error }
}
