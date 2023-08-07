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
const createTestData = async (req) => { 
    try {
        const {databaseActions} = require("../../../wrappid/index");
        let data = await databaseActions.create("application", "testdatas", {req});
        return data;
    } catch (error) {
        throw new Error(error);
    }

};

/**
 * 
 */
const updateTestData = async (req) => { 
    try {
        const {databaseActions} = require("../../../wrappid/index");
       let data = await databaseActions.update("application", "testdatas", {req});
       return data;
   } catch (error) {
       throw new Error(error);
   }
};

/**
 * 
 * @returns 
 */
// const readTestData = async () => {
//     try {
//          const {databaseActions} = require("../../../wrappid/index");
//         let data = await databaseActions.findAll("application", "testdatas", {});
//         return data;
//     } catch (error) {
//         throw new Error(error);
//     }
// };

/**
 * 
 */
const readTestData = async (req) => {
    try {
        //cache call to get data
        const {databaseActions} = require("../../../wrappid/index");
        let data = await databaseActions.findOne("application", "testdatas", {req});
        //cache call to get data
        return data;
    } catch (error) {
        throw new Error(error);
    }
};


/**
 * 
 */
const deleteTestData = async(req) => {
    try {
        const {databaseActions} = require("../../../wrappid/index");
       let data = await databaseActions.delete("application", "testdatas", {req});
       return data;
   } catch (error) {
       throw new Error(error);
   }

 };

module.exports = {
    testFunc1,
    testFunc2,
    createTestData,
    updateTestData,
    readTestData,
    deleteTestData
};