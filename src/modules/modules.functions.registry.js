const testFunctionsRegistry = require("./test/functions.registry");
const authFunctionsRegistry = require("./auth/functions.registry");

module.exports = {
    ...testFunctionsRegistry,
    ...authFunctionsRegistry,
}
