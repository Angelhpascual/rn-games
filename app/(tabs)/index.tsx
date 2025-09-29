import { Game } from "@/src/domain/entities/Game"
import { useAllGames } from "@/src/presentation/hooks/useAllGames"
import { useRouter } from "expo-router"
import { FlatList, Text } from "react-native"
import GameCard from "../components/GameCard"

export default function Index() {
  const { games, loading, error } = useAllGames()
  const numColumns = 2
  const router = useRouter()

  const handleOpenDetails = (game: Game) => {
    router.push({
      pathname: "/(tabs)/gameDetails",
      params: { gameId: game.id.toString() },
    })
  }
  return (
    <FlatList
      key={`grid-${numColumns}`}
      data={games}
      numColumns={numColumns}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <GameCard game={item} onPress={handleOpenDetails} />
      )}
      ListHeaderComponent={() => (
        <Text className="text-2xl font-bold mb-4">Free to Play Games</Text>
      )}
      ListEmptyComponent={() =>
        loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text>Error: {error}</Text>
        ) : (
          <Text>No games available.</Text>
        )
      }
      contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 24 }}
    />
  )
}
