import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const checkoutSchema = yup
  .object({
    name: yup.string().required("Enter your full name"),
    email: yup.string().required("Enter your email address"),
  })
  .required();

export const checkoutSchemaResolver = {
  resolver: yupResolver(checkoutSchema),
};
