const app = require("./app");
const { DEFAULT_PORT } = require("./wrappid/constants/server.constant");

const __PORT = process.env.PORT || DEFAULT_PORT

const serverInit = () => {
  console.log(`Server is up and running on port ${__PORT}...`);
};

const server = app.listen(__PORT, serverInit);

module.exports = { server };