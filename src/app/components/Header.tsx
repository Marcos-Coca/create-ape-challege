import { TouchableOpacity } from "react-native";

import Text from "~ui/Text";

import useSession from "../../session/hooks/useSession";

export default function Header() {
  const { logout } = useSession();

  return (
    <TouchableOpacity onPress={() => logout()}>
      <Text>Log out</Text>
    </TouchableOpacity>
  );
}
