
const testRoutes = require("./test/routes.registry");

console.log(testRoutes);

const moduleRoutesRegistry = { ...testRoutes.routesRegistry };

module.exports = moduleRoutesRegistry;