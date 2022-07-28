import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "./screens/Login";
import { Register } from "./screens/Register";

import Header from "./components/Header";

import theme from "~ui/theme";

const Stack = createNativeStackNavigator();

export function SessionScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          paddingBottom: 50,
          paddingHorizontal: 40,
        },
        headerTintColor: theme.font.color.base,
        headerTitle: (props) => <Header {...props} />,
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.background.color,
        },
      }}
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
