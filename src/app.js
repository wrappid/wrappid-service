const express = require("express");
const app = express();

var bodyParser = require("body-parser");

var cors = require("cors");
const {activityLogger} = require("../src/wrappid/middlewares/apiLogger.middleware")

const {
  
  setupLogging,
  setupModels,
  setupRoutes,
  databaseProvider,
  cacheProvider,
} = require("./wrappid");
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
app.use(activityLogger);

/**
 * Setup Logging
 */
setupLogging(app);

/**
 * @todo
 * setup database
 */
// console.log(`----------------------------------`);
// console.log(`Database Provider`);
// console.log(`----------------------------------`);
// console.log(databaseProvider);
// console.log(`----------------------------------`);
setupModels(databaseProvider);
// console.log(`----------------------------------`);
// console.log(`Post Setup Database Provider`);
// console.log(`----------------------------------`);
// console.log(databaseProvider);
// console.log(`----------------------------------`);
// console.log(`Get data from test models`);
// console.log(`----------------------------------`);

const testDatabase = async () => {
  try {
    // let data = await databaseProvider.application.models.test.create({name: "Rahul"});
    let data = await databaseProvider.application.models.testdatas.findAll();
    console.log(data);
  } catch (err) {
    console.log("----------------------------------");
    console.log(err);
    console.log("----------------------------------");
  }
};
// testDatabase();
console.log(`----------------------------------`);

/**
 * @todo
 * setup routes
 */
setupRoutes(app);

module.exports = app;
