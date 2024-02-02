console.log("###########################################");
console.log("server.js start");
console.log("###########################################");

import { DEFAULT_PORT } from "@wrappid/service-core";
import { wrappidApp } from "./wrappidApp";

const __PORT = process.env.PORT || DEFAULT_PORT;

const serverInit = () => {
  console.log("###########################################");
  console.log(`Server is up and running on port ${__PORT}...`);
  console.log("###########################################");
};

const server = wrappidApp.listen(__PORT, serverInit);

console.log("###########################################");
console.log("server.js end");
console.log("###########################################");

export { server };
