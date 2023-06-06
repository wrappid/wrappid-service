const databaseProvider = require("./database/provider.database");
const setupLogging = require("./logging/setup.logging");
const setupRoutes = require("./route/setup.route");

module.exports = {
    setupLogging,
    setupRoutes,
    databaseProvider,
}