/**
 * @todo
 * 1)get routesregistry from modules.routes.registry.js
 * 2)run a loop on  modules.routes.registry to use every single router present in the module 
 * 3)
 */

const moduleRoutesRegistry = require("../../modules/modules.routes.registry");

const setupRoutes = (app) => {
    Object.keys(moduleRoutesRegistry).forEach((route) => {
        // const router = moduleRoutesRegistry[route];
        // app.use(`/${route}`, moduleRoutesRegistry[route]);
        
        console.log(route);
        console.log(moduleRoutesRegistry[route]);
    
      });
}

exports.setupRoutes = setupRoutes;