const TestDatas = require("./models/TestDatas.model");
const FileHandlers = require("./models/FileHandlers.model");

const modelsRegistry = {
    "TestDatas": {
        database: "application",
        model   : TestDatas
    },
    "FileHandlers": {
        database: "application",
        model   : FileHandlers
    }
};

exports.modelsRegistry = modelsRegistry;