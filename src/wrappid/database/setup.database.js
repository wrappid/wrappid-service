const Sequelize = require("sequelize");
const ModelsRegistry = require("../../wrappid/registry/ModelsRegistry");

const setupModels = (databaseProvider) => {
    Object.keys(databaseProvider).forEach(databaseName => {
        let database = databaseProvider[databaseName];

        let models = Object.keys(ModelsRegistry).filter(model => {
            return ModelsRegistry[model].database === databaseName;
        });

        console.log(`Adding models to ${databaseName} database...`);
        databaseProvider[databaseName].models = {}
        models.forEach(model => {
            console.log(`Adding ~${model}~ model...`);
            databaseProvider[databaseName].models[model] = ModelsRegistry[model].model(databaseProvider[databaseName].sequelize, Sequelize);
        });
        console.log(`Models added to ${databaseName} database successfully.`);
    });
}

module.exports = setupModels;