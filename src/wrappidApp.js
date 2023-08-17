const express = require("express");

const {
  CoreMiddlewaresRegistry,
  setupModels,
  setupLogging,
  setupRoutes,
  setupTasks,
  CoreModelsRegistry,
} = require("@wrappid/service-core");

const wrappidApp = express();

let bodyParser = require("body-parser");
let cors = require("cors");
const { RoutesRegistry, TasksRegistry } = require("./registry");
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
 *
 */
setupModels(CoreModelsRegistry);
wrappidApp.use(CoreMiddlewaresRegistry.apiLogger);

/**
 * corn jobs
 */
setupTasks(TasksRegistry);

/**
 * Setup Logging
 */
setupLogging(wrappidApp);

/**
 * @todo
 * setup routes
 */
setupRoutes(wrappidApp, RoutesRegistry);

module.exports = wrappidApp;
