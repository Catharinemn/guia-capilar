import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import ExploreScreen from "../screens/ExploreScreen";
import HomeScreen from "../screens/HomeScreen";
import ProdutosScreen from "../screens/ProdutosScreen";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarStyle: {
            backgroundColor: "#cfe8ff",
            height: 60
          },

          tabBarActiveTintColor: "#4169E1",
          tabBarInactiveTintColor: "#6aa9ff",

          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Explore") {
              iconName = "chatbubble-ellipses";
            } else if (route.name === "Produtos") {
              iconName = "bag";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Produtos" component={ProdutosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}