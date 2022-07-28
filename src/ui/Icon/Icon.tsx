import { SvgXml } from "react-native-svg";
import theme from "~ui/theme";
import icons from "./icons";

export interface IconProps {
  color?: keyof typeof theme.font.color;
  name: keyof typeof icons;
}

export default function Icon({ name, color = "base" }: IconProps) {
  return <SvgXml xml={icons[name]} color={theme.font.color[color]} />;
}
