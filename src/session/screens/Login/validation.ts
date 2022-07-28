import * as yup from "yup";
import service from "../../services/session";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is Required")
    .test(
      "checkEmailRegistered",
      "The email entered is not registered",
      function (value) {
        return service.checkEmailsIsRegistered(value);
      }
    ),

  password: yup.string().required("Password is Required"),
});

export default validationSchema;
