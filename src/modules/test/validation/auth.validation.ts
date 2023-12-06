const yup = require("yup");

const emailOrPhone = yup
  .string()
  .matches(/^([0-9]{10}|[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+)$/);

const otp = yup.string().min(0o0).max(999999);

const checkLoginOrRegister = {
  body: yup
    .object({
      emailOrPhone: emailOrPhone.required(),
    })
    .noUnknown()
    .strict(),
  query: yup
    .object({
      loginWithOtp: yup.string(),
    })
    .noUnknown()
    .strict(),
};

const login = {
  body: yup
    .object({
      emailOrPhone: emailOrPhone.required(),
      password: yup.string().required(),
      devInfo: yup.string(),
    })
    .noUnknown()
    .strict(),
  query: yup.object({}).noUnknown().strict(),
};

const postLoginWithOtp = {
  body: yup
    .object({
      otp: otp.required(),
      emailOrPhone: emailOrPhone.required(),
      password: yup.string(),
      devInfo: yup.string(),
    })
    .noUnknown()
    .strict(),
  query: yup.object({ reset: yup.string().notRequired() }).noUnknown().strict(),
};

const postLogoutSchema = {
  body: yup.object({}).noUnknown().strict(),
  query: yup.object({}).noUnknown().strict(),
};

const sentOtp = {
  body: yup
    .object({
      data: emailOrPhone.required("Please enter emailOrPhone!!"),
      // Type: yup.string().required("Please enter Type!!"),
      type: yup.string().notRequired(),
      templateID: yup.string().notRequired(),
    })
    .noUnknown()
    .strict(),
  query: yup.object({}).noUnknown().strict(),

};

const getClientLoginInfo = {
  body: yup.object({}).noUnknown().strict(),
  query: yup.object({}).noUnknown().strict(),
};

const getIpSchema = {
  params: yup.object({}).noUnknown().strict(),
  query: yup.object({}).noUnknown().strict(),
};

const postLoginWithUrl = {
  params: yup.object({}).noUnknown().strict(),
  query: yup.object({}).noUnknown().strict(),
};

const postChangePassword = {
  params: yup.object({}).noUnknown().strict(),
  query: yup.object({}).noUnknown().strict(),
};

const refreshTokenSchema = {
  body: yup
    .object({
      refreshToken: yup.string().required(),
    })
    .noUnknown()
    .strict(),
  query: yup.object({}).noUnknown().strict(),
};
const postVerifyOtp = {
  params: yup.object({}).noUnknown().strict(),
  query: yup.object({}).noUnknown().strict(),
};

const validateEmail = yup
  .string()
  .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Invalid email");

const validatePhone = yup
  .string()
  .matches(/^[0-9]{10}$/, "Phone number must contains 10 digits")
  .required();
module.exports = {
  checkLoginOrRegister,
  login,
  postLoginWithOtp,
  postLogoutSchema,
  getIpSchema,
  refreshTokenSchema,
  postLoginWithUrl,
  getClientLoginInfo,
  sentOtp,
  validateEmail,
  validatePhone,
  postChangePassword,
  postVerifyOtp
};
