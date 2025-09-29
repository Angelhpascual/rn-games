import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import GameCard from "../GameCard"
import { Game } from "@/src/domain/entities/Game"

const baseGame: Game = {
  id: 1,
  title: "Test Game",
  thumbnail: "https://example.com/thumb.jpg",
  shortDescription: "A fun test game",
  gameUrl: "https://example.com/game",
  genre: "Action",
  platform: "PC",
  publisher: "Test Publisher",
  developer: "Test Dev",
  releaseDate: "2024-01-01",
  freetogameProfileUrl: "https://example.com/profile",
}

describe("GameCard", () => {
  it("renders primary game information", () => {
    const { getByText } = render(<GameCard game={baseGame} />)

    expect(getByText(baseGame.title)).toBeTruthy()
    expect(getByText(`${baseGame.genre} · ${baseGame.platform}`)).toBeTruthy()
  })

  it("calls onPress with the current game", () => {
    const handlePress = jest.fn()
    const { getByText } = render(
      <GameCard game={baseGame} onPress={handlePress} />,
    )

    fireEvent.press(getByText(baseGame.title))

    expect(handlePress).toHaveBeenCalledTimes(1)
    expect(handlePress).toHaveBeenCalledWith(baseGame)
  })
})
