const authModels = require("./auth/models.registry");

const moduleModelsRegistry = { ...authModels.modelsRegistry };

module.exports = moduleModelsRegistry;