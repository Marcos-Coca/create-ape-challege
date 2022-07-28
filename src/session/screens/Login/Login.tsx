import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "~ui/Input";
import { Button } from "~ui/Button";

import { Formik } from "formik";
import useSession from "../../hooks/useSession";
import validationSchema from "./validation";
import WrongPasswordModal from "../../components/WrongPasswordModal";

const initialValues = { email: "", password: "" };

export default function Login() {
  const { login } = useSession();
  const [modalVisible, setModalVisible] = useState(false);

  function onSubmit(email: string, password: string) {
    return login(email, password).catch((err) => {
      if (err.message === "Invalid Password") {
        setModalVisible(true);
      }
    });
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={({ email, password }) => onSubmit(email, password)}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        touched,
        errors,
        values,
        isSubmitting,
        isValid,
      }) => (
        <View style={styles.container}>
          <View>
            <Input
              label="Email"
              autoComplete="email"
              keyboardType="email-address"
              value={values.email}
              errorMessage={touched.email && errors.email}
              onBlur={handleBlur("email")}
              onChangeText={handleChange("email")}
              containerStyle={styles.input}
            />

            <Input
              label="Password"
              secureTextEntry={true}
              placeholder="Type your password"
              value={values.password}
              errorMessage={touched.password && errors.password}
              onBlur={handleBlur("password")}
              onChangeText={handleChange("password")}
              containerStyle={styles.input}
            />
          </View>

          <Button disabled={isSubmitting || !isValid} onPress={handleSubmit}>
            Sig in
          </Button>

          <WrongPasswordModal
            visible={modalVisible}
            hideModal={() => setModalVisible(false)}
          />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  input: {
    marginVertical: 10,
  },
});
