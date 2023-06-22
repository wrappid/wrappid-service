
const databaseActions = {
    
    /**
     * 
    */
   findAll: async (database, model, options) => {
       try {
            const databaseProvider = require("./provider.database")
            return await databaseProvider[database].models[model].findAll(options);
        } catch (error) {
            throw new Error(error);
        }
    },

    findOne: async (database,model,options) => {
        try {
            const databaseProvider = require("./provider.database")
            return await databaseProvider[database].models[model].findOne(options);

        } catch(error) {
            throw new Error(error);
        }
    },

    create: async (database, model, data) => {
        try {
            const databaseProvider = require("./provider.database");
            return await databaseProvider[database].models[model].create(data);
        } catch (error) {
            throw new Error(error);
        }


    },

    findByPk: async (database, model, primaryKey) => {
        try {
          const databaseProvider = require("./provider.database");
          return await databaseProvider[database].models[model].findOne(primaryKey);
        } catch (error) {
          throw new Error(error);
        }
      },

}

module.exports = databaseActions;