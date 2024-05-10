import * as yup from "yup";

export const articleValidation = yup.object().shape({
  title: yup
    .string()
    .min(3, "must be at least 3 characters")
    .max(200, "must be a maximum of 200 characters")
    .required("Title is required field"),
  summary: yup
    .string()
    .min(3, "must be at least 3 characters")
    .max(200, "must be a maximum of 200 characters")
    .required("Summary is required field"),
  publisher: yup
    .string()
    .min(3, "must be at least 3 characters")
    .max(200, "must be a maximum of 200 characters")
    .required("Publisher is required field"),
});
