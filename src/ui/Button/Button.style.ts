import { StyleSheet } from "react-native";
import theme from "~ui/theme";

export default StyleSheet.create({
  button: {
    paddingVertical: 19,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.border.radius.md,
  },
  outline: {
    borderColor: theme.font.color.base,
    borderWidth: theme.border.width.md,
  },
  disabled: {
    opacity: 0.5,
  },
});
