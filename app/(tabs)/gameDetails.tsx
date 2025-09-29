import { useGameById } from "@/src/presentation/hooks/useGameById"
import { useLocalSearchParams } from "expo-router"
import React from "react"
import {
  ActivityIndicator,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

const GameDetails = () => {
  const { gameId } = useLocalSearchParams<{ gameId?: string }>()
  const parsedId = gameId ? Number(gameId) : undefined
  const { game, loading, error } = useGameById(parsedId)

  if (!gameId) {
    return (
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-center text-base text-gray-500">
          Selecciona un juego desde la pestaña Home para ver sus detalles aquí.
        </Text>
      </View>
    )
  }

  if (Number.isNaN(parsedId)) {
    return (
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-center text-base text-red-500">
          El identificador del juego no es válido.
        </Text>
      </View>
    )
  }

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-center text-base text-red-500">{error}</Text>
      </View>
    )
  }

  if (!game) {
    return (
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-center text-base text-gray-500">
          No se encontró información del juego.
        </Text>
      </View>
    )
  }

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="flex-1">
        <Image
          source={{ uri: game.thumbnail }}
          className="h-56 w-full"
          resizeMode="cover"
        />
        <View className="flex-1 justify-between px-6 py-6">
          <View>
            <Text className="text-3xl font-bold">{game.title}</Text>
            <Text className="mt-1 text-base text-gray-600">
              {game.genre} · {game.platform}
            </Text>
            <Text className="mt-4 text-base text-gray-700">
              {game.shortDescription}
            </Text>

            <View className="mt-6 space-y-2">
              <Text className="text-sm text-gray-500">
                Publicador: <Text className="text-gray-800">{game.publisher}</Text>
              </Text>
              <Text className="text-sm text-gray-500">
                Desarrollador: <Text className="text-gray-800">{game.developer}</Text>
              </Text>
              <Text className="text-sm text-gray-500">
                Lanzamiento: <Text className="text-gray-800">{game.releaseDate}</Text>
              </Text>
            </View>
          </View>

          <TouchableOpacity
            className="mt-8 rounded-full bg-blue-600 py-3"
            activeOpacity={0.85}
            onPress={() => Linking.openURL(game.gameUrl)}
          >
            <Text className="text-center text-base font-semibold text-white">
              Jugar ahora
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default GameDetails
