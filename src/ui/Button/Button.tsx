import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
  View,
} from "react-native";

import Text from "~ui/Text";
import theme from "~ui/theme";

import styles from "./Button.style";

export interface ButtonProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  children: string;
  color?: "primary";
  type?: "solid" | "outline";
  buttonStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function Button({
  children,
  color = "primary",
  type = "solid",
  disabled,
  buttonStyle = {},
  containerStyle = {},
  ...rest
}: ButtonProps) {
  const buttonStyles = StyleSheet.flatten([
    styles.button,
    type === "outline" && styles.outline,
    { backgroundColor: type === "solid" ? theme.colors[color] : "transparent" },
    buttonStyle,
  ]);

  return (
    <View
      style={StyleSheet.flatten([containerStyle, disabled && styles.disabled])}
    >
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.8}
        style={buttonStyles}
        {...rest}
      >
        <Text size="sm" weight="bold">
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
