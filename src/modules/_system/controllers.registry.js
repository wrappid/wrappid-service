const _systemController = require("./controllers/_system.controller");

const controllersRegistry = {
    getVersion: [_systemController.getVersion]
};

exports.controllersRegistry = controllersRegistry;