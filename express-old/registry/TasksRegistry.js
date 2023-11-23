const { CoreTasksRegistry } = require("@wrappid/service-core");
const modulesTasksRegistry = require("../modules/modules.tasks.registry");

const tasksRegistry = {
    ...modulesTasksRegistry,
    ...CoreTasksRegistry
};

module.exports = tasksRegistry;
