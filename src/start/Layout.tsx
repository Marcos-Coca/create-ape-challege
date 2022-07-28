import { ReactNode } from "react";

import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../assets/background-image.png")}
    >
      <LinearGradient
        colors={[
          "rgba(0, 13, 22, 0.95)",
          "rgba(0, 13, 22, 0.37)",
          "rgba(0, 13, 22, 0)",
          "rgba(0, 13, 22, 0.51)",
          "rgba(0, 13, 22, 0.906807)",
          "#000D16",
        ]}
        style={styles.gradient}
      >
        {children}
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 45,
  },
});
