const express = require('express');
const app = express();

var bodyParser = require("body-parser");
// const helmet = require('helmet');
// const rateLimit = require("express-rate-limit");
// const csrf = require('csurf');
// const cookieParser = require('cookie-parser');

var cors = require("cors");
const { setupLogging } = require('./wrappid/logging');
const { databaseProvider } = require('./wrappid');
var options = {
  inflate: true,
  limit: "50mb",
  type: "application/octet-stream",
};

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100000 // limit each IP to 100 requests per windowMs
// });
// const csrfProtection = csrf({ cookie: true });

// app.use(csrfProtection);
app.use(express.static("uploads"));
app.use(express.static("build"));
// app.use(cookieParser());
// app.use(limiter);
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.raw(options));
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Setup Logging
 */
setupLogging(app);

/**
 * @todo
 * setup database
 */
console.log(`----------------------------------`);
console.log(`Database Provider`);
console.log(`----------------------------------`);
console.log(databaseProvider);
console.log(`----------------------------------`);

/**
 * @todo
 * setup routes
 */

module.exports = {
    app
};