
const testRoutes = require("./test/routes.registry");
const authRoutes = require("./auth/routes.registry");

const moduleRoutesRegistry = {
    ...testRoutes.routesRegistry,
    ...authRoutes.routesRegistry,
};

module.exports = moduleRoutesRegistry;