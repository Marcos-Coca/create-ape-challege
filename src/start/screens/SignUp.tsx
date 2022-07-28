import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";

import { Button } from "~ui/Button";
import Text from "~ui/Text";
import { StartStackParamList } from "..";

type ResgiterProps = NativeStackScreenProps<StartStackParamList, "SignUp">;

export default function SignUp({ navigation }: ResgiterProps) {
  return (
    <View style={styles.container}>
      <Text size="2xl">
        Gain access to a large, highly influential network of entrepreneurs
      </Text>
      <Button
        onPress={() => navigation.navigate("Session", { screen: "Register" })}
        buttonStyle={styles.applyButton}
      >
        Apply Now!
      </Button>
      <Button
        onPress={() => navigation.navigate("Session", { screen: "Login" })}
        buttonStyle={styles.logInButton}
        type="outline"
      >
        Log in!
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  applyButton: {
    marginTop: 22,
  },
  logInButton: {
    marginBottom: 12,
    marginTop: 21,
  },
});
