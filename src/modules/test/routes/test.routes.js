const express = require("express");

const testController = require("../controllers/test.controller");

const testMiddleware = require("../middlewares/test.middleware");
const fileHandlerMiddleware = require("../../../wrappid/middlewares/fileHandler.middleware");
const { constant } = require("../../../wrappid/constants/server.constant");

const testRouter = express.Router();

// testRouter.post("/upload", uploadS3.single("ProfilePic"), testController.testUploadFunc);
// testRouter.post("/upload", filesHandlerMiddleware("ProfilePic"), testController.testUploadFunc);
// testRouter.post("/upload", fileHandlerMiddleware({storageType: constant.storageType.AWS_S3, filename: "ProfilePic"}), testController.testUploadFunc);
testRouter.post("/upload", fileHandlerMiddleware({storageType: constant.storageType.LOCAL, filename: "ProfilePic"}), testController.testUploadFunc);


testRouter.get("/", testMiddleware, testController.testGetFunc);
testRouter.post("/", testMiddleware, testController.testPostFunc);
testRouter.put("/", testMiddleware, testController.testPutFunc);
testRouter.patch("/", testMiddleware, testController.testPatchFunc);

module.exports = testRouter;