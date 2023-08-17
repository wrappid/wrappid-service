const {
    FunctionsRegistry,
    MiddlewaresRegistry,
    ModelsRegistry,
    RoutesRegistry,
    TasksRegistry,
    ValidationsRegistry
} = require("./registry");

module.exports = {
    config: require("../wrappid.conf.json"),
    registry: {
        Functions: FunctionsRegistry,
        Middlewares: MiddlewaresRegistry,
        Models: ModelsRegistry,
        Routes: RoutesRegistry,
        Tasks: TasksRegistry,
        Validations: ValidationsRegistry
    }
}