const express = require("express");

const testController = require("../controllers/test.controller");

const testMiddleware = require("../middlewares/test.middleware");
// const {fileHandler, filesHandler} = require("../../../wrappid/middlewares/fileHandler.middleware");
const fileHandler = require("../../../wrappid/middlewares/fileHandler.middleware");
const { constant } = require("../../../wrappid/constants/server.constant");
const getTest = require("../../../wrappid/utils/yupValidationSchema").getTest;
const postTest = require("../../../wrappid/utils/yupValidationSchema").postTest;
const putTest = require("../../../wrappid/utils/yupValidationSchema").putTest;
const patchTest = require("../../../wrappid/utils/yupValidationSchema").patchTest;
const validation = require("../../../wrappid/middlewares/validation.middleware");

const testRouter = express.Router();

// testRouter.post("/upload", fileHandler({storageType: constant.storageType.AWS_S3, filename: "flashoff"}), testController.testUploadFunc);
testRouter.post("/upload", fileHandler({storageType: constant.storageType.LOCAL, filename: "flashoff"}), testController.testUploadFunc);
// testRouter.post("/upload/multiple", filesHandler({storageType: constant.storageType.LOCAL, files: 'photos'}), testController.testMultipleUploadFunc);

testRouter.get("/", validation(getTest), testController.testGetFunc);
testRouter.post("/", validation(postTest), testController.testPostFunc);
testRouter.put("/", validation(putTest), testController.testPutFunc);
testRouter.patch("/", validation(patchTest), testController.testPatchFunc);
testRouter.get("/sentMail", testMiddleware , testController.testSentMail);

module.exports = testRouter;
