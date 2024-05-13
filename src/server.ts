import { DEFAULT_PORT, WrappidApp } from "@wrappid/service-core";

import packageJson from "./../package.json";
import applicationConfig from "./config.json";
import ControllersRegistry from "./registry/ControllersRegistry";
import FunctionsRegistry from "./registry/FunctionsRegistry";
import MiddlewaresRegistry from "./registry/MiddlewaresRegistry";
import ModelsRegistry from "./registry/ModelsRegistry";
import RoutesRegistry from "./registry/Routes.Registry";
import TasksRegistry from "./registry/TasksRegistry";
import ValidationsRegistry from "./registry/ValidationsRegistry";
import swaggerJson from "./swagger-output.json";

try {
  console.log("###########################################");
  console.log("server.js start");
  console.log("###########################################");

  const __PORT = process.env.PORT || DEFAULT_PORT;
  
  const wrappidApp = new WrappidApp({
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

  wrappidApp.init();

} catch (error: any) {
  console.error(error);
} finally {
  console.log("###########################################");
  console.log("server.js end");
  console.log("###########################################");
}
