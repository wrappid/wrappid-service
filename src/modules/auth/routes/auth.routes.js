const express = require("express");

const authController = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/checkLoginOrRegister", authController.checkLoginOrRegister);
authRouter.post("/login", authController.login);
authRouter.post("/loginWithOtp", authController.loginWithOtp);
authRouter.post("/loginWithUrl", authController.loginWithUrl);
authRouter.post("/logout", authController.logout);
authRouter.get("/getIP", authController.getIP);
authRouter.post("/refreshToken", authController.refreshToken);
authRouter.get("/clientLoginInformation", authController.clientLoginInformation);

module.exports = authRouter;