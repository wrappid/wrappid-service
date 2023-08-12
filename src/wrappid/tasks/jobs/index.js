"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const jobs = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const job = require(path.join(__dirname, file));
    jobs[file.substring(0, file.indexOf(".js"))] = job;
  });

module.exports = jobs;
