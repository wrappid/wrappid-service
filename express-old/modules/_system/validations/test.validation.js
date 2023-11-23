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

module.exports = {
  getTestAll,
  getTest,
  postTest,
  putTest,
  patchTest
};
