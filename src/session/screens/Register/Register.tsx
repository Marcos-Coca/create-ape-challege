import { StyleSheet, View } from "react-native";
import { Input } from "~ui/Input";
import { Button } from "~ui/Button";

import { Formik } from "formik";
import useSession from "../../hooks/useSession";
import validationSchema from "./validations";

const initialValues = { email: "", password: "", confirmPassword: "" };

export default function Resgiter() {
  const { register } = useSession();

  function onSubmit(email: string, password: string) {
    return register(email, password);
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

            <Input
              label="Confirm Password"
              secureTextEntry={true}
              placeholder="Type your password"
              value={values.confirmPassword}
              errorMessage={touched.confirmPassword && errors.confirmPassword}
              onBlur={handleBlur("confirmPassword")}
              onChangeText={handleChange("confirmPassword")}
              containerStyle={styles.input}
            />
          </View>

          <Button disabled={isSubmitting || !isValid} onPress={handleSubmit}>
            Register
          </Button>
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
