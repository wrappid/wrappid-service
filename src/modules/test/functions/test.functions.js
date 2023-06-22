const {databaseActions} = require("../../../wrappid/index");

/**
 * 
 * @returns 
 */
const testFunc1 = () => {
    return "This is a test func 1.";
};

/**
 * 
 * @returns 
 */
const testFunc2 = () => {
    return "This is a test func 2.";
};

/**
 * 
 */
const createTestData = () => { };

/**
 * 
 */
const updateTestData = () => { };

/**
 * 
 * @returns 
 */
const readTestData = async () => {
    try {
        // console.log(`--------------------------------`);
        // const {databaseProvider} = require("../../../wrappid");
        // console.log(databaseProvider);
        // console.log(`--------------------------------`);
        // let data = await databaseProvider.application.models.testdatas.findAll();
        let data = await databaseActions.findAll("application", "testdatas", {});
        return data;
    } catch (error) {
        throw new Error(error);
    }
};


/**
 * 
 */
const deleteTestData = () => { };

module.exports = {
    testFunc1,
    testFunc2,
    createTestData,
    updateTestData,
    readTestData,
    deleteTestData
};