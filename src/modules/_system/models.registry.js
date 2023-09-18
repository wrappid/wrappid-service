const TestDatas = require("./models/TestDatas.model");

const modelsRegistry = {
    "TestDatas": {
        database: "application",
        model   : TestDatas
    }
};

exports.modelsRegistry = modelsRegistry;