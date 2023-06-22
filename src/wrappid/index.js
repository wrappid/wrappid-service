const databaseProvider = require("./database/provider.database");
const databaseActions = require("./database/actions.database");
const setupLogging = require("./logging/setup.logging");
const setupRoutes = require("./route/setup.route");
const setupModels = require('./database/setup.database');

// const { clearValidatePhoneEmail, getDeviceId } = require("../wrappid/communication/helper");
const communicationUtils = require("./utils/communication.utils");

module.exports = {
  /**
   * logging
   */
  setupLogging,
  /**
   * routes
   */
  setupRoutes,
  /**
   * database
   */
  setupModels,
  databaseProvider,
  databaseActions,
  /**
   * communication
   */
  communicationUtils,
};