const cron = require("node-cron");
const jobs = require("./jobs");
let Sequelize = require("sequelize");

const initializeCronJobs = async () => {
  console.log(`::----- Its initializeCronJobs -----::`);
  try {
    const { databaseActions } = require("../../wrappid/index");
    cronSchemas = await databaseActions.findAll("application", "Cronschemas");
  } catch (error) {
    throw new Error(error);
  }

  // let cronSchemas = require("./cronSchema.json");
  if (cronSchemas && Array.isArray(cronSchemas) && cronSchemas.length > 0) {
    cronSchemas.forEach((cronSchema) => {
      if (!cronSchema?.expression) {
        console.error(
          `Can't run task named as ${
            cronSchema?.name || "Unknown"
          } due to no expression`
        );
      }
      if (!cronSchema?.cronModule) {
        console.error(
          `Can't run task named as ${
            cronSchema?.name || "Unknown"
          } due to no module`
        );
      }

      cron.schedule(cronSchema?.expression, () => {
        let cronModule = jobs[cronSchema.cronModule];
        try {
          console.log("running every minute to 1 from 5");
          if (cronModule.prePerform() /*pass or access db inside*/) {
            cronModule.perform(); // pass or access db inside
          }
        } catch (error) {
          cronModule.handleError(e); // pass or access db inside
        } finally {
          cronModule.postPerform(); // pass or access db inside
        }
      });
    });
  }
};

module.exports =  initializeCronJobs ;
