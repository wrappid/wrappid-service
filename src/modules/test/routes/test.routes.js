const express = require("express");

const testController = require("../controllers/test.controller");

const testMiddleware = require("../middlewares/test.middleware");
const filesHandlerMiddleware = require("../../../wrappid/middlewares/filesHandler.middleware");
const { constant } = require("../../../wrappid/constants/server.constant");
const { uploadS3 } = require("../../../wrappid/middlewares/fileHandler.middleware");

const testRouter = express.Router();

// testRouter.post("/upload", filesHandlerMiddleware({storageType: constant.storageType.AWS_S3, naming: "ProfilePic"}), testController.testUploadFunc);
testRouter.post("/upload", uploadS3.single("ProfilePic"), testController.testUploadFunc);

testRouter.get("/", testMiddleware, testController.testGetFunc);
testRouter.post("/", testMiddleware, testController.testPostFunc);
testRouter.put("/", testMiddleware, testController.testPutFunc);
testRouter.patch("/", testMiddleware, testController.testPatchFunc);

module.exports = testRouter;