const express = require("express");

const {
  CoreMiddlewaresRegistry,
  setupModels,
  setupLogging,
  setupRoutes,
  setupTasks,
  setupFunctions
} = require("@wrappid/service-core");

const wrappidApp = express();

let bodyParser = require("body-parser");
let cors = require("cors");
const { TasksRegistry, ModelsRegistry, ControllersRegistry, FunctionsRegistry } = require("./registry");
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
await setupFunctions(FunctionsRegistry);

/**
 * Setup Routes
*/
setupRoutes(wrappidApp, ControllersRegistry);


module.exports = wrappidApp;