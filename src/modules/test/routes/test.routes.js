const express = require("express");

const testController = require("../controllers/test.controller");

const { getTest, postTest, putTest, patchTest } = require("../validations/test.validation");
const { constant, ApplicationContext } = require("@wrappid/service-core");

const testRouter = express.Router();

// testRouter.post("/upload", fileHandler({storageType: constant.storageType.AWS_S3, filename: "flashoff"}), testController.testUploadFunc);
testRouter.post("/upload", ApplicationContext.registry.Middlewares.fileHandler({storageType: constant.storageType.LOCAL, filename: "flashoff"}), testController.testUploadFunc);
// testRouter.post("/upload/multiple", filesHandler({storageType: constant.storageType.LOCAL, files: 'photos'}), testController.testMultipleUploadFunc);

testRouter.get("/", ApplicationContext.registry.Middlewares.validation(getTest), testController.testGetFunc);
testRouter.post("/", ApplicationContext.registry.Middlewares.validation(postTest), testController.testPostFunc);
testRouter.put("/", ApplicationContext.registry.Middlewares.validation(putTest), testController.testPutFunc);
testRouter.patch("/", ApplicationContext.registry.Middlewares.validation(patchTest), testController.testPatchFunc);

module.exports = testRouter;
