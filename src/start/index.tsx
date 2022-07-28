import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Layout from "./Layout";
import SignUp from "./screens/SignUp";
import Welcome from "./screens/Welcome";

const Stack = createNativeStackNavigator();

export type StartStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
};

export function StartStackScreen() {
  return (
    <Layout>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group
          screenOptions={{ contentStyle: { backgroundColor: "transparent" } }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Group>
      </Stack.Navigator>
    </Layout>
  );
}
