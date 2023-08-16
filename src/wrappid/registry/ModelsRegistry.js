const modulesModelsRegistry = require("../../modules/modules.models.registry");
const CronSchemas = require("../tasks/cronSchemas.model");

const modelsRegistry = {
    "CronSchemas": {
        database: "application",
        model   : CronSchemas
    },
    ...modulesModelsRegistry
};

module.exports = modelsRegistry;
