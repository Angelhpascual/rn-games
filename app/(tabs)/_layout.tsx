import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

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
        options={{
          title: "Details",
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
        }}
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
