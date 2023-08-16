const express = require("express");
const app = express();

var bodyParser = require("body-parser");

var cors = require("cors");

const {
  setupLogging,
  setupModels,
  setupRoutes,
  databaseProvider,
  cacheProvider,
  MiddlewaresRegistry,
  initializeCronJobs
} = require("@wrappid/service-core");

var options = {
  inflate: true,
  limit: "50mb",
  type: "application/octet-stream",
};
app.use(express.static("uploads"));
app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.raw(options));
app.use(bodyParser.urlencoded({ extended: true }));
/**
 *
 */
setupModels(databaseProvider);
app.use(MiddlewaresRegistry.apiLogger);

/**
 * corn jobs
 */
initializeCronJobs();

/**
 * Setup Logging
 */
setupLogging(app);

/**
 * @todo
 * setup routes
 */
setupRoutes(app);

module.exports = app;
