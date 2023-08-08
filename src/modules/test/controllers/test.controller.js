
const testFunctions = require("../functions/test.functions");
const cachemanager = require("../../../wrappid/cache/cache.manager")

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.testGetFunc = async (req, res) => {
    try {
        let data = await testFunctions.readTestData(req);
        return res.status(200).json({ message: "Response Data(•_•) :", data });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong.", error });
    }
};

/**s
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.testPatchFunc = async (req, res) => {
    // return res.status(200).json({ message: "This is a test PATCH API." });
    try {
        let data = await testFunctions.deleteTestData(req);
        return res.status(200).json({ message: "Deleted(^_^)", data });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong.", error });
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.testPostFunc = async (req, res) => {
    // return res.status(200).json({ message: "This is a test POST API." });
    try {
        let data = await testFunctions.createTestData(req);
        return res.status(200).json({ message: "Data is inserted (•_•) ", data });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong.", error });
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.testPutFunc = async (req, res) => {
    // return res.status(200).json({ message: "This is a test PUT API." });
    try {
        let data = await testFunctions.updateTestData(req);
        return res.status(200).json({ message: "Data updated (•_•).", data });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong.", error });
    }
};