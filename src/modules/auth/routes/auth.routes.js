const express = require("express");

const authController = require("../controllers/auth.controller");

// const authMiddleware = require("../middlewares/auth.middleware");

const authRouter = express.Router();

// authRouter.get("/", authMiddleware, authController.authGetFunc);

authRouter.post("/checkLoginOrRegister", authController.checkLoginOrRegister);
authRouter.post("/login", authController.login);
authRouter.post("/loginWithOtp", authController.loginWithOtp);
authRouter.post("/loginWithUrl", authController.loginWithUrl);
authRouter.post("/logout", authController.logout);
authRouter.get("/getIP", authController.getIP);
authRouter.post("/refreshToken", authController.refreshToken);
authRouter.get("/clientLoginInformation", authController.clientLoginInformation);

module.exports = authRouter;