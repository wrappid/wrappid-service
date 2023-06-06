/**
 * @todo
 * 
 * This will be the entry point for all the 
 * DB change request from outside application(s)
 * 
 * Access/Privileges
 * - 3rd Party Application have read access for data.
 * - Business Application have create, read, update for data.
 * - Database Manager have all the access.
 * 
 * Multiple Database
 * - UMS [Development | (Test - Refresh) |Stage/Production]
 *      - User
 *      - Role
 *      - Permission
 * 
 * - BUILDER [SINGLE INSTANCE]
 *      - Application Setting(s) eg. Request Timeout, Max File Size
 *      - Route
 *      - Pages
 *      ...
 * 
 * - DATA [SINGLE INSTANCE]
 *      - Medicines
 *      - Diseases
 *      ...
 * 
 * - APPLICATION
 *      - Patient
 *      ...
 * 
 */

"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config");

const databaseProvider = {};

config.databases.forEach(async (database) => {
  try {
    let sequelize = new Sequelize(
      database.database,
      database.username,
      database.password,
      database
    );
  
    databaseProvider[database.name] = {},
    databaseProvider[database.name]["sequelize"] = sequelize;
    
    await databaseProvider[database.name].sequelize.authenticate();
    console.log(`Connection to ${database.name} database has been established successfully.`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error(error);
  }
});

module.exports = databaseProvider;