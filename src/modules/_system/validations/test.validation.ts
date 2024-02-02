import yup from "yup";

export const getTestAll = {
  query: yup.object({}).noUnknown().strict(),
};

export const getTest = {
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

export const postTest = {
  body: yup
    .object({
      name: yup.string().required(),
    })
    .noUnknown()
    .strict(),
  query: yup.object({}).noUnknown().strict(),
};

export const putTest = {
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

export const patchTest = {
  body: yup
    .object({
      id: yup.mixed(),
    })
    .noUnknown()
    .strict(),
  query: yup.object({ id: yup.mixed() }).noUnknown().strict(),
};
