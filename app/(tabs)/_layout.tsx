import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { TouchableOpacity } from "react-native"

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#fffd33d" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="gameDetails"
        options={({ navigation }) => ({
          title: "Details",
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 12 }}
              onPress={() => navigation.navigate("index")}
              activeOpacity={0.7}
            >
              <Ionicons name="chevron-back" size={24} color="#1f2937" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused
                  ? "information-circle-sharp"
                  : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "call-sharp" : "call-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  )
}
