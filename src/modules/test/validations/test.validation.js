const yup = require("yup");

const getTestAll = {
  query: yup.object({}).noUnknown().strict(),
};

const getTest = {
  body: yup
    .object({
      id: yup.mixed(),
    })
    .noUnknown()
    .strict(),
  query: yup
    .object({
      id: yup.mixed(),
    })
    .noUnknown()
    .strict(),
};

const postTest = {
  body: yup
    .object({
      name: yup.string().required(),
    })
    .noUnknown()
    .strict(),
  query: yup.object({}).noUnknown().strict(),
};

const putTest = {
  body: yup
    .object({
      id: yup.mixed(),
      name: yup.string(),
    })
    .noUnknown()
    .strict(),
  query: yup
    .object({ id: yup.mixed(), name: yup.string() })
    .noUnknown()
    .strict(),
};

const patchTest = {
  body: yup
    .object({
      id: yup.mixed(),
    })
    .noUnknown()
    .strict(),
  query: yup.object({ id: yup.mixed() }).noUnknown().strict(),
};

const validateEmail = yup
  .string()
  .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Invalid email")
  .required();

const validatePhone = yup
  .string()
  .matches(/^[0-9]{10}$/, "Phone number must contains 10 digits")
  .required();

module.exports = {
  getTestAll,
  getTest,
  postTest,
  putTest,
  patchTest,
  validateEmail,
  validatePhone,
};
