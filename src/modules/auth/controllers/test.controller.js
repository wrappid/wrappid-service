
const testFunctions = require("../functions/test.functions");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.testGetFunc = async (req, res) => {
    let data = await testFunctions.readTestData();
    return res.status(200).json({ message: "This is a test GET API.", data });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.testPatchFunc = async (req, res) => {
    return res.status(200).json({ message: "This is a test PATCH API." });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.testPostFunc = async (req, res) => {
    return res.status(200).json({ message: "This is a test POST API." });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.testPutFunc = async (req, res) => {
    return res.status(200).json({ message: "This is a test PUT API." });
};