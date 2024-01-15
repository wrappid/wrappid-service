const { CoreControllersRegistry } = require("@wrappid/service-core");
const modulesControllersRegistry = require("../modules/modules.controllers.registry");

const ControllersRegistry = {
  ...modulesControllersRegistry,
  ...CoreControllersRegistry,
};

module.exports = ControllersRegistry;
