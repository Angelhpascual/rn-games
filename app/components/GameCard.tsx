import { Game } from "@/src/domain/entities/Game"
import React from "react"
import { Image, Text, TouchableOpacity } from "react-native"

interface GameCardProps {
  game: Game
  onPress?: (game: Game) => void
}

const GameCard: React.FC<GameCardProps> = ({ game, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => onPress?.(game)}
      className="mb-4 rounded-lg bg-white p-4 shadow"
      style={{ width: "48%" }}
    >
      <Image
        source={{ uri: game.thumbnail }}
        className="h-32 w-full rounded-lg"
        resizeMode="contain"
      />
      <Text className="text-lg font-semibold">{game.title}</Text>
      <Text className="text-sm text-gray-600">
        {game.genre} · {game.platform}
      </Text>
    </TouchableOpacity>
  )
}

export default GameCard
