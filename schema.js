import * as yup from "yup";

// validasyon semasi - formdaki inputlarin gecerli olmasi icin gerekli kosullari tanimladigimiz yer

const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("The email must be in a valid format")
    .required("Email is required"),
  age: yup
    .number()
    .min(18, "Age must be bigger than 18")
    .max(100, "Age must be smaller than 100")
    .integer("Please enter a valid age")
    .required("Age is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .matches(regex, "Password isn't strong enough")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    // oneOf iki password inputunun da ayni olmasini saglar
    .oneOf([yup.ref("password")], "Your confirmation password does not match")
    .required("Confirm your password"),
});
