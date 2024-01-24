const {
  CoreMiddlewaresRegistry,
  setupModels,
  setupLogging,
  setupRoutes,
  setupTasks,
  setupFunctions,
  setupSwagger,
} = require("@wrappid/service-core");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const swaggerJsonFile = require("./swagger-output.json");


const wrappidApp = express();

const {
  TasksRegistry,
  ModelsRegistry,
  ControllersRegistry,
  FunctionsRegistry,
// eslint-disable-next-line import/order
} = require("./registry");

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
setupRoutes(wrappidApp, ControllersRegistry);

/**
 *  Setup swagger API Docs
 */
setupSwagger(wrappidApp, swaggerJsonFile);

module.exports = wrappidApp;