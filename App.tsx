import { useState } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import theme from "~ui/theme";

import { User } from "./src/session/types";

import { AppScreen } from "./src/app";
import { StartStackScreen } from "./src/start";
import { SessionScreen } from "./src/session";

import { SessionContextProvider } from "./src/session/context";

const Stack = createNativeStackNavigator();

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.background.color,
  },
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <SessionContextProvider user={user} setUser={setUser}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <Stack.Screen name="App" component={AppScreen} />
          ) : (
            <>
              <Stack.Screen name="Start" component={StartStackScreen} />
              <Stack.Screen name="Session" component={SessionScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SessionContextProvider>
  );
}
