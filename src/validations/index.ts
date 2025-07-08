import * as yup from "yup";

export const callbackRequestSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Name must only contain letters and spaces"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^\d+$/, "Phone number must only contain digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number cannot be more than 10 digits")
    .test("is-positive", "Phone number cannot be negative", (value) => {
      return Number(value) >= 0;
    }),
  email: yup
    .string()
    .required("Email is required!")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/g,
      "Email is invalid!"
    ),
  message: yup.string().optional(),
});
