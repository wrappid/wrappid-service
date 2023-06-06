const express = require("express");

const testController = require("../controllers/test.controller");

const testMiddleware = require("../middlewares/test.middleware");

const testRouter = express.Router();

testRouter.get("/", testMiddleware, testController.testGetFunc);
testRouter.post("/", testMiddleware, testController.testPostFunc);
testRouter.put("/", testMiddleware, testController.testPutFunc);
testRouter.patch("/", testMiddleware, testController.testPatchFunc);

module.exports = testRouter;