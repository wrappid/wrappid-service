const test = require("./models/test.model");

const modelsRegistry = {
    "test": {
        database: "application",
        model   : test
    }
};

exports.modelsRegistry = modelsRegistry;