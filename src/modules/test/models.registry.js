const testdatas = require("./models/testdatas.model");

const modelsRegistry = {
    "testdatas": {
        database: "application",
        model   : testdatas
    }
};

exports.modelsRegistry = modelsRegistry;