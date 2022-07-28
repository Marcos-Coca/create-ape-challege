import { StyleSheet } from "react-native";
import Text from "~ui/Text";

interface Props {
  children: string;
  tintColor?: string | undefined;
}

export default function Header({ children }: Props) {
  return (
    <Text style={styles.title} size="xl">
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 60,
    marginBottom: 40,
    alignItems: "center",
  },
});
