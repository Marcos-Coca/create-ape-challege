import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { Button } from "~ui/Button";
import Text from "~ui/Text";
import { StartStackParamList } from "..";

type WelcomeProps = NativeStackScreenProps<StartStackParamList, "Welcome">;

export default function Welcome({ navigation }: WelcomeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text size="xl">Welcome</Text>
        <Text style={styles.descriptionText} size="sm">
          Obtain unfiltered insight on how others like you excel at life and
          business on a daily basis.
        </Text>
      </View>
      <Button onPress={() => navigation.push("SignUp")}>Get Started</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textContainer: {
    width: "80%",
  },
  descriptionText: {
    marginVertical: 22,
  },
});
