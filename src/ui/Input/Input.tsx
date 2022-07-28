import { ComponentPropsWithRef } from "react";
import { StyleProp, TextInput, View, ViewStyle } from "react-native";
import Text from "~ui/Text";
import { Icon } from "~ui/Icon";

import styles from "./Input.style";

import theme from "~ui/theme";

export interface InputProps extends ComponentPropsWithRef<typeof TextInput> {
  label: string;
  errorMessage?: string | false;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function Input({
  label,
  errorMessage,
  containerStyle,
  ...attributes
}: InputProps) {
  return (
    <View style={containerStyle}>
      <Text style={styles.label} size="lg">
        {label}
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={theme.font.color.muted}
          {...attributes}
        ></TextInput>

        {errorMessage && <Icon name="alert" />}
      </View>

      <Text style={styles.errorMessage} size="xs" color="error">
        {errorMessage}
      </Text>
    </View>
  );
}
