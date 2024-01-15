const { CoreMiddlewaresRegistry } = require("@wrappid/service-core");
const modulesMiddlewaresRegistry = require("../modules/modules.middlewares.registry");

const MiddlewaresRegistry = {
  ...modulesMiddlewaresRegistry,
  ...CoreMiddlewaresRegistry,
};

module.exports = MiddlewaresRegistry;
