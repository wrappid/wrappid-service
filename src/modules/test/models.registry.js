const testdatas = require("./models/testdatas.model");
const api_request_logs = require("./models/api_request_logs.model");
const FileHandlers = require("./models/fileHandler.model");

const modelsRegistry = {
    "testdatas": {
        database: "application",
        model   : testdatas
    },
    "api_request_logs": {
        database : "application",
        model    : api_request_logs
    },
    "FileHandlers": {
        database: "application",
        model   : FileHandlers
    }
};

exports.modelsRegistry = modelsRegistry;