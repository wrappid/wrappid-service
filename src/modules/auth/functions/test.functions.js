const { databaseProvider } = require("../../../wrappid");

/**
 * 
 * @returns 
 */
module.exports.testFunc1 = () => {
    return "This is a test func 1.";
};

/**
 * 
 * @returns 
 */
module.exports.testFunc2 = () => {
    return "This is a test func 2.";
};

/**
 * 
 */
module.exports.createTestData = () => { };

/**
 * 
 */
module.exports.updateTestDat = () => { };

/**
 * 
 * @returns 
 */
module.exports.readTestData = async () => {
    console.log(`--------------------------------`);
    console.log(databaseProvider);
    console.log(`--------------------------------`);
    // let data = await databaseProvider.application.Test.findAll();
    return Object.keys(databaseProvider);
};

/**
 * 
 */
module.exports.deleteTestData = () => { };