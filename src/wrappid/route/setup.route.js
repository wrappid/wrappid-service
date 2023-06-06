/**
 * @todo
 * 1)get routesregistry from modules.routes.registry.js
 * 2)run a loop on  modules.routes.registry to use every single router present in the module 
 * 3)
 */

const moduleRoutesRegistry = require("../../modules/modules.routes.registry");

const setupRoutes = (app) => {
  console.log(`----------------------------------`);
  console.log(`Setting up routes...`);
  Object.keys(moduleRoutesRegistry).forEach((route) => {
    console.log(`Route = ${route}`);
    console.log(`RouteData = ${moduleRoutesRegistry[route]}`);
    app.use(`/${route}`, moduleRoutesRegistry[route]);
  });
  console.log(`Routes setup successfully.`);
  console.log(`----------------------------------`);
}

module.exports = setupRoutes;