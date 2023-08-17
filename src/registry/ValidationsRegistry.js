const { CoreValidationsRegistry } = require("@wrappid/service-core");
const modulesValidationsRegistry = require("../modules/modules.validations.registry");

const ValidationsRegistry = {
    ...modulesValidationsRegistry,
    ...CoreValidationsRegistry
};

module.exports = ValidationsRegistry;
