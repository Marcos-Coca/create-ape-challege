import { ReactNode } from "react";
import {
  Text as NativeText,
  StyleSheet,
  StyleProp,
  TextStyle,
} from "react-native";
import theme from "./theme";

export interface TextProps {
  color?: keyof typeof theme.font.color;
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  size?: keyof typeof theme.font.size;
  weight?: "bold" | "semiBold" | "normal" | "medium";
}

export default function Text({
  children,
  style,
  color = "base",
  size = "md",
  weight = "normal",
}: TextProps) {
  return (
    <NativeText
      style={StyleSheet.flatten([
        {
          color: theme.font.color[color],
          fontSize: theme.font.size[size],
          fontWeight: theme.font.weight[weight],
        },
        style,
      ])}
    >
      {children}
    </NativeText>
  );
}
