console.log("###########################################");
console.log("server.js start");
console.log("###########################################");

import { DEFAULT_PORT, coreApp } from "@wrappid/service-core";
import express from "express";
import ControllersRegistry from "./registry/ControllersRegistry";
import FunctionsRegistry from "./registry/FunctionsRegistry";
import ModelsRegistry from "./registry/ModelsRegistry";
import RoutesRegistry from "./registry/Routes.Registry";
import TasksRegistry from "./registry/TasksRegistry";
import swaggerJsonFile from "./swagger-output.json";

const wrappidApp: any = express();
try {
  
  coreApp(wrappidApp,ControllersRegistry, FunctionsRegistry, ModelsRegistry, RoutesRegistry, TasksRegistry, swaggerJsonFile);

  const __PORT = process.env.PORT || DEFAULT_PORT;

  const serverInit = () => {
    console.log("###########################################");
    console.log(`Server is up and running on port ${__PORT}...`);
    console.log("###########################################");
  };

  wrappidApp.listen(__PORT, serverInit);

  console.log("###########################################");
  console.log("server.js end");
  console.log("###########################################");

} catch (error: any) {
  console.log(error);
}
