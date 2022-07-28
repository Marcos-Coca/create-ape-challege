import { StyleSheet } from "react-native";
import theme from "~ui/theme";

export default StyleSheet.create({
  label: {
    marginBottom: 14,
  },
  input: {
    paddingVertical: 10,
    flexBasis: "95%",
    outlineStyle: "none",
    color: theme.font.color.base,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: theme.font.color.base,
    borderBottomWidth: theme.border.width.sm,
  },
  errorMessage: {
    marginTop: 12,
  },
});
