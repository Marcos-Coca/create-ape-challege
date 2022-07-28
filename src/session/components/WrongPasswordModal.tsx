import { Modal, StyleSheet, View } from "react-native";
import { Button } from "~ui/Button";
import Text from "~ui/Text";

interface Props {
  visible: boolean;
  hideModal: () => void;
}

export default function WrongPasswordModal({ visible, hideModal }: Props) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={hideModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title} size="2xl" color="inverted">
              Incorrect Password
            </Text>
            <Text size="md" color="inverted">
              The password you entered for hello@gmail.com is incorrect. Please
              Try again.
            </Text>
            <Button containerStyle={styles.button} onPress={hideModal}>
              Try Again
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: 40,
    paddingHorizontal: 50,
  },
  title: {
    marginBottom: 22,
  },
  button: {
    marginTop: 30,
    alignSelf: "stretch",
  },
});
