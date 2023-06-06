

const setupModels = (databaseProvider) => {
    Object.keys(databaseProvider).forEach(databaseName => {
        let database = databaseProvider[databaseName];
        
        let models = Object.keys(moduleModelsRegistry).filter(model => {
            return moduleModelsRegistry[model].database === database.name;
        });

        console.log(`Adding models to ${database.name} database...`);
        databaseProvider[database.name].models = {}
        models.forEach(model => {
            console.log(`Adding ~${model}~ model...`);
            databaseProvider[database.name].models[model] = moduleModelsRegistry[model].model(databaseProvider[database.name].sequelize, Sequelize);
        });
        console.log(`Models added to ${database.name} database successfully.`);
    });
}

module.exports = setupModels;