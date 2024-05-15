import { beforeAll, describe } from "@jest/globals";
import { DEFAULT_PORT, WrappidApp } from "@wrappid/service-core";
import { WrappidTestSuite } from "@wrappid/test-suite";

import packageJson from "./../../package.json";
import applicationConfig from "./../../src/config.json";
import ControllersRegistry from "./../../src/registry/ControllersRegistry";
import FunctionsRegistry from "./../../src/registry/FunctionsRegistry";
import MiddlewaresRegistry from "./../../src/registry/MiddlewaresRegistry";
import ModelsRegistry from "./../../src/registry/ModelsRegistry";
import RoutesRegistry from "./../../src/registry/Routes.Registry";
import TasksRegistry from "./../../src/registry/TasksRegistry";
import ValidationsRegistry from "./../../src/registry/ValidationsRegistry";
import swaggerJson from "./../../src/swagger-output.json";

let wrappidApp: WrappidApp;

beforeAll(async () => {
  await wrappidApp.init();
}, 20000);

describe("Wrappid Automation Testing Suite", () => {
  const __PORT = process.env.PORT || DEFAULT_PORT;
  
  wrappidApp = new WrappidApp({
    port: __PORT,
    cors: { origin: "*" },
    bodyPerser: {
      json: { limit: "50mb" },
      raw: {
        inflate: true,
        limit: "50mb",
        type: "application/octet-stream",
      },
      urlencoded: { extended: true }
    },
    registry: {
      ControllersRegistry, 
      FunctionsRegistry, 
      ModelsRegistry, 
      RoutesRegistry, 
      TasksRegistry, 
      MiddlewaresRegistry, 
      ValidationsRegistry
    },
    swagger: { ...swaggerJson },
    config: { ...applicationConfig },
    package: {...packageJson}
  });

  new WrappidTestSuite(wrappidApp).init();
});
