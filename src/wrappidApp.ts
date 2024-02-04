import swaggerJsonFile from "./swagger-output.json";

import {
  CoreMiddlewaresRegistry,
  setupModels,
  setupLogging,
  setupRoutes,
  setupTasks,
  setupFunctions,
  setupSwagger,
} from "@wrappid/service-core";

import express from "express";
const wrappidApp: any = express();

import { TasksRegistry } from "./registry/TasksRegistry";
import { ModelsRegistry } from "./registry/ModelsRegistry";
import { ControllersRegistry } from "./registry/ControllersRegistry";
import { FunctionsRegistry } from "./registry/FunctionsRegistry";
import { RoutesRegistry } from "./registry/Routes.Registry";

let bodyParser = require("body-parser");
let cors = require("cors");

let options = {
  inflate: true,
  limit: "50mb",
  type: "application/octet-stream",
};

wrappidApp.use(express.static("uploads"));
wrappidApp.use(express.static("build"));
wrappidApp.use(cors());
wrappidApp.use(bodyParser.json({ limit: "50mb" }));
wrappidApp.use(bodyParser.raw(options));
wrappidApp.use(bodyParser.urlencoded({ extended: true }));

/**
 * Setup Models
 */
setupModels(ModelsRegistry);

/**
 * Setup Tasks
 */
setupTasks(TasksRegistry);

/**
 * Setup Logging
 */
setupLogging(wrappidApp);

/**
 * Setup Default Middlewares
 */
wrappidApp.use(CoreMiddlewaresRegistry.apiLogger);

/**
 * Setup Functions
 */
setupFunctions(FunctionsRegistry);

/**
 * Setup Routes
 */
setupRoutes(wrappidApp, ControllersRegistry, RoutesRegistry);

/**
 *  Setup swagger API Docs
 */
setupSwagger(wrappidApp, swaggerJsonFile);

export { wrappidApp };
