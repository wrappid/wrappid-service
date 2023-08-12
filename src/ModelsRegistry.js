const moduleModelsRegistry = require("./modules/modules.models.registry");
const moduleModelsRegistryCornJobs = require("./wrappid/tasks/jobs/modules.models.registry");
module.exports = {
    ...moduleModelsRegistryCornJobs,
    ...moduleModelsRegistry
}