const express = require("express");

const testController = require("../controllers/test.controller");

const { getTestAll, getTest, postTest, putTest, patchTest } = require("../validations/test.validation");
const { constant, CoreMiddlewaresRegistry } = require("@wrappid/service-core");

const testRouter = express.Router();

// testRouter.post("/upload", fileHandler({storageType: constant.storageType.AWS_S3, filename: "flashoff"}), testController.testUploadFunc);
testRouter.post("/upload", CoreMiddlewaresRegistry.fileHandler({storageType: constant.storageType.LOCAL, filename: "flashoff"}), testController.testUploadFunc);
// testRouter.post("/upload/multiple", filesHandler({storageType: constant.storageType.LOCAL, files: 'photos'}), testController.testMultipleUploadFunc);

testRouter.get("/", CoreMiddlewaresRegistry.validation(getTestAll), testController.testGetAllFunc);
testRouter.get("/:id", CoreMiddlewaresRegistry.validation(getTest), testController.testGetFunc);
testRouter.post("/", CoreMiddlewaresRegistry.validation(postTest), testController.testPostFunc);
testRouter.put("/:id/:name", CoreMiddlewaresRegistry.validation(putTest), testController.testPutFunc);
testRouter.patch("/:id", CoreMiddlewaresRegistry.validation(patchTest), testController.testPatchFunc);

module.exports = testRouter;
