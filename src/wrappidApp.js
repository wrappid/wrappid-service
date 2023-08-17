const express = require("express");

const {
  setApplicationContext,
  setupModels,
  initializeCronJobs,
  setupLogging,
  setupRoutes
} = require("@wrappid/service-core");
const ApplicationContext = require("./ApplicationContext");

setApplicationContext(ApplicationContext);

const wrappidApp = express();

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
   *
   */
  setupModels(databaseProvider);
  wrappidApp.use(MiddlewaresRegistry.apiLogger);

  /**
   * corn jobs
   */
  initializeCronJobs();

  /**
   * Setup Logging
   */
  setupLogging(wrappidApp);

  /**
   * @todo
   * setup routes
   */
  setupRoutes(wrappidApp);

module.exports = wrappidApp;
