const databaseActions = {
  /**
   *
   */
  findAll: async (database, model) => {
    try {
      const databaseProvider = require("./provider.database");
      return await databaseProvider[database].models[model].findAll();
    } catch (error) {
      throw new Error(error);
    }
  },

  delete: async (database, model, data) => {
    try {
      const databaseProvider = require("./provider.database");
      return await databaseProvider[database].models[model].destroy(data);
    } catch (error) {
      throw new Error(error);
    }
  },

  update: async (database, model, data) => {
    try {
      const databaseProvider = require("./provider.database");
      return await databaseProvider[database].models[model].update(
        { name: data["req"]["body"]["name"] },
        { where: { id: data["req"]["body"]["id"] } }
      );
    } catch (error) {
      throw new Error(error);
    }
  },

  findOne: async (database, model, data) => {
    try {
      const databaseProvider = require("./provider.database");
      return await databaseProvider[database].models[model].findAll({
        where: {
          id: data["req"]["body"]["id"],
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  },

  create: async (database, model, data) => {
    try {
      const databaseProvider = require("./provider.database");
      return await databaseProvider[database].models[model].create({
        name: data["req"]["body"]["name"],
      });
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
};

module.exports = databaseActions;
