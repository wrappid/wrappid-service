const Sequelize = require("sequelize");
const moduleModelsRegistry = require("../../modules/modules.models.registry");

const setupModels = (databaseProvider) => {
    Object.keys(databaseProvider).forEach(databaseName => {
        let database = databaseProvider[databaseName];

        let models = Object.keys(moduleModelsRegistry).filter(model => {
            return moduleModelsRegistry[model].database === databaseName;
        });

        console.log(`Adding models to ${databaseName} database...`);
        databaseProvider[databaseName].models = {}
        models.forEach(model => {
            console.log(`Adding ~${model}~ model...`);
            databaseProvider[databaseName].models[model] = moduleModelsRegistry[model].model(databaseProvider[databaseName].sequelize, Sequelize);
        });
        console.log(`Models added to ${databaseName} database successfully.`);
    });
}

module.exports = setupModels;