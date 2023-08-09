const clientConnect = async (clientName) => {
  try {
    const cacheProvider = require("./cache.provider");
    cacheProvider[clientName].client.on("error", (err) =>
      console.log("Redis Client Error", err)
    );
    await cacheProvider[clientName].client.connect();
  } catch (error) {
    console.log(error);
  }
};

const cacheActions = {
  /**
   *
   */
  read: async (clientName, cacheKey) => {
    try {
      const cacheProvider = require("./cache.provider");
      await clientConnect(clientName);
      const value = await cacheProvider[clientName].client.get(cacheKey);
      return value;
    } catch (error) {
      throw new Error(error);
    } finally {
      const cacheProvider = require("./cache.provider");
      await cacheProvider[clientName].client.disconnect();
    }
  },

  update: async (clientName, cacheKey, data) => {
    try {
      const cacheProvider = require("./cache.provider");
      await clientConnect(clientName);

      const value = await cacheProvider[clientName].client.set(cacheKey, data);
    } catch (error) {
      throw new Error(error);
    } finally {
      const cacheProvider = require("./cache.provider");
      await cacheProvider[clientName].client.disconnect();
    }
  },

  delete: async (clientName, cacheKey) => {
    try {
      const cacheProvider = require("./cache.provider");
      await clientConnect(clientName);
      let d = await cacheProvider[clientName].client.exists(cacheKey);
      if (d == 1) {
        await cacheProvider[clientName].client.del(cacheKey);
      } else {
        console.log("Key Not Present");
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      const cacheProvider = require("./cache.provider");
      await cacheProvider[clientName].client.disconnect();
    }
  },
};

module.exports = cacheActions;
