const { constant } = require("@wrappid/service-core");
const { setApplicationContext } = require("@wrappid/service-core");
const ApplicationContext = require("./ApplicationContext");
const wrappidApp = require("./wrappidApp");

const __PORT = process.env.PORT || constant.DEFAULT_PORT

const serverInit = () => {
  console.log(`Server is up and running on port ${__PORT}...`);
};

const server = wrappidApp.listen(__PORT, serverInit);

module.exports = { server };