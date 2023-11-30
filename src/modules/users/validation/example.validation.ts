// middleware/schemas/validation.schema.ts

import * as yup from "yup";

export const exampleValidationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});
