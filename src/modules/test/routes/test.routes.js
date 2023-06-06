import { Router } from "express";

import { testGetFunc, testPostFunc, testPutFunc, testPatchFunc } from "../controllers/test.controller";
import testMiddleware from "../middlewares/test.middleware";
const testRouter = Router();

testRouter.get("/test", testMiddleware, testGetFunc);
testRouter.post("/test", testMiddleware, testPostFunc);
testRouter.put("/test", testMiddleware, testPutFunc);
testRouter.patch("/test", testMiddleware, testPatchFunc);

export default testRouter;