const { CoreFunctionsRegistry } = require("@wrappid/service-core");
const modulesFunctionsRegistry = require("../modules/modules.functions.registry");

const FunctionsRegistry = {
    ...modulesFunctionsRegistry,
    ...CoreFunctionsRegistry
};

module.exports = FunctionsRegistry;
