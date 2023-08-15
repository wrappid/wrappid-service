const express = require("express");

const testController = require("../controllers/test.controller");

const testMiddleware = require("../middlewares/test.middleware");
const fileHandlerMiddleware = require("../../../wrappid/middlewares/fileHandler.middleware");
const { constant } = require("../../../wrappid/constants/server.constant");
const { uploadS3 } = require("../../../wrappid/middlewares/fileHandler.middleware");
const getTest = require("../../../wrappid/utils/yupValidationSchema").getTest;
const postTest = require("../../../wrappid/utils/yupValidationSchema").postTest;
const putTest = require("../../../wrappid/utils/yupValidationSchema").putTest;
const patchTest = require("../../../wrappid/utils/yupValidationSchema").patchTest;
const validation = require("../../../wrappid/middlewares/validation.middleware");

const testRouter = express.Router();

// testRouter.post("/upload", filesHandlerMiddleware({storageType: constant.storageType.AWS_S3, naming: "ProfilePic"}), testController.testUploadFunc);
// testRouter.post("/upload", uploadS3.single("ProfilePic"), testController.testUploadFunc);

testRouter.get("/", validation(getTest), testController.testGetFunc);
testRouter.post("/", validation(postTest), testController.testPostFunc);
testRouter.put("/", validation(putTest), testController.testPutFunc);
testRouter.patch("/", validation(patchTest), testController.testPatchFunc);

module.exports = testRouter;
