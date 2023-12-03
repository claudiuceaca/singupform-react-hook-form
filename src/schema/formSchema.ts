import * as yup from "yup" // For building schema

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const formSchema = yup.object().shape({
  firstName:yup.string().required("This field its required!").min(3, 'Min 3 characters'),
  lastName:yup.string().required("This field its required!").max(10, 'Max 10 characters'),
  email:yup.string().email().required("This field its required!"),
  password:yup.string()
  .matches(passwordRules, { message: "Please create a stronger password" })
  .required("Required"),
  confirmPassword:yup.string().oneOf([yup.ref("password")]).required(),
  pronounce:yup.string(),
  notifications:yup.boolean(),
  acceptTerms:yup.boolean().oneOf([true], 'Field must be checked'),
  accountType:yup.string()
})

export default formSchema;