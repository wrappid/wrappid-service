const { CoreModelsRegistry } = require("@wrappid/service-core");
const modulesModelsRegistry = require("../modules/modules.models.registry");

const ModelsRegistry = {
  ...modulesModelsRegistry,
  ...CoreModelsRegistry,
};

module.exports = ModelsRegistry;
