const testdatas = require("./models/testdatas.model");
const ApirequestLogs = require("./models/ApirequestLogs.model");
const FileHandlers = require("./models/fileHandler.model");

const modelsRegistry = {
    "testdatas": {
        database: "application",
        model   : testdatas
    },
    "ApirequestLogs": {
        database : "application",
        model    : ApirequestLogs
    },
    "FileHandlers": {
        database: "application",
        model   : FileHandlers
    }
};

exports.modelsRegistry = modelsRegistry;