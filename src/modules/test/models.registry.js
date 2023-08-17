const testdatas = require("./models/testdatas.model");
const ApirequestLogs = require("@wrappid/service-core/models/ApiRequestLogs.model");
const FileHandlers = require("./models/fileHandler.model");

const modelsRegistry = {
    "testdatas": {
        database: "application",
        model   : testdatas
    },
    "FileHandlers": {
        database: "application",
        model   : FileHandlers
    }
};

exports.modelsRegistry = modelsRegistry;