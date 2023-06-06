const databaseProvider = require("./database/database.provider");
const setupLogging = require("./logging/setup.logging");
const setupRoutes = require("./route/setup.route");

module.exports = {
    setupLogging,
    setupRoutes,
    databaseProvider,
}