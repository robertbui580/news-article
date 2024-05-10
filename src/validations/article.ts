import * as yup from "yup";

export const articleValidation = yup.object().shape({
  title: yup.string().min(3).max(200).required(),
  summary: yup.string().min(3).max(200).required(),
  publisher: yup.string().min(3).max(200).required(),
});
