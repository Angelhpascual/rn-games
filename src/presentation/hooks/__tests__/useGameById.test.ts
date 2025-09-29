import { renderHook, waitFor } from "@testing-library/react-native"
import { useGameById } from "../useGameById"
import { Game } from "@/src/domain/entities/Game"
import { getGameByIdUseCase } from "@/src/infrastructure/di/container"

jest.mock("@/src/infrastructure/di/container", () => ({
  getGameByIdUseCase: {
    execute: jest.fn(),
  },
}))

describe("useGameById", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("fetches and exposes game data", async () => {
    const game: Game = {
      id: 42,
      title: "Hooked Game",
      thumbnail: "https://example.com/image.jpg",
      shortDescription: "Short description",
      gameUrl: "https://example.com/game",
      genre: "MMO",
      platform: "PC",
      publisher: "Pub",
      developer: "Dev",
      releaseDate: "2024-06-22",
      freetogameProfileUrl: "https://example.com/profile",
    }

    ;(getGameByIdUseCase.execute as jest.Mock).mockResolvedValueOnce(game)

    const { result } = renderHook(() => useGameById(game.id))

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(getGameByIdUseCase.execute).toHaveBeenCalledWith(game.id)
    expect(result.current.game).toEqual(game)
    expect(result.current.error).toBeNull()
  })

  it("does not fetch when id is missing", () => {
    const { result } = renderHook(() => useGameById(undefined))

    expect(getGameByIdUseCase.execute).not.toHaveBeenCalled()
    expect(result.current.game).toBeNull()
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBeNull()
  })

  it("captures errors from the use case", async () => {
    const error = new Error("boom")
    ;(getGameByIdUseCase.execute as jest.Mock).mockRejectedValueOnce(error)

    const { result } = renderHook(() => useGameById(7))

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(result.current.error).toContain("boom")
    expect(result.current.game).toBeNull()
  })
})
