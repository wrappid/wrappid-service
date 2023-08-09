const { createClient } = require("redis");
// const {JSONCache} = require('redis-json');
// const{ Redis } = require('ioredis');
const config = require("../config/provider.config");

const cacheProvider = {};

config.cache.forEach(async (data) => {
  try {
    const client = createClient({
      username: data.username,
      password: data.password,
      socket: {
        host: data.host,
        port: data.port,
      },
    });
    cacheProvider[data.name] = {};
    cacheProvider[data.name].client = client;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error(error);
  }
});

module.exports = cacheProvider;
