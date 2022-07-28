import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "~ui/Icon";
import theme from "~ui/theme";
import Adventures from "./screens/Adventures";
import Header from "./components/Header";

import Home from "./screens/Home";
import Income from "./screens/Income";
import Library from "./screens/Library";

const Tab = createBottomTabNavigator();

export function AppScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitle: "",
        headerShadowVisible: false,
        headerRight: () => <Header />,
        headerStyle: { backgroundColor: theme.background.color },
        contentStyle: { backgroundColor: theme.background.color },
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarIcon: ({ focused }) => (
          <Icon
            color={focused ? "primary" : "muted"}
            name={route.name as any}
          />
        ),
      })}
    >
      <Tab.Group>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Income" component={Income} />
        <Tab.Screen name="Adventures" component={Adventures} />
        <Tab.Screen name="Library" component={Library} />
      </Tab.Group>
    </Tab.Navigator>
  );
}
