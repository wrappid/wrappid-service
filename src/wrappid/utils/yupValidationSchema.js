const { query } = require("express");
const yup = require("yup");


const getTest = {
  body: yup
    .object({
      id: yup.mixed().required(),
    })
    .noUnknown()
    .strict(),
  query: yup.object({}).noUnknown().strict(),
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
      id: yup.mixed().required(),
      name: yup.string().required()
    })
    .noUnknown()
    .strict(),
  query: yup.object({}).noUnknown().strict(),
};

const patchTest = {
  body: yup
    .object({
      id: yup.mixed().required()
    })
    .noUnknown()
    .strict(),
  query: yup.object({}).noUnknown().strict(),
};



module.exports = {
  getTest,
  postTest,
  putTest,
  patchTest
};
