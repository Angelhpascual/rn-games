import { Link } from "expo-router"
import { Text, View } from "react-native"

export default function Index() {
  return (
    <View className="bg-pink-400 flex-1 items-center justify-center h-screen">
      <Text className="text-blue-500 font-bold">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href="/about">Go to About</Link>
    </View>
  )
}
