const testFunctions = require("../functions/test.functions");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.testGetAllFunc = async (req, res) => {
  try {
    let data = await testFunctions.readTestDataAll(req);
    return res.status(200).json({ message: "Response Data(•_•) :", data });
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
module.exports.testGetFunc = async (req, res) => {
  try {
    let data = await testFunctions.readTestData(req);
    return res.status(200).json({ message: "Response Data(•_•) :", data });
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
  try {
    console.log('::---',req.params,'---::');
    let data = await testFunctions.updateTestData(req);
    return res.status(200).json({ message: "Data updated (•_•).", data });
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
module.exports.testPatchFunc = async (req, res) => {
  try {
    let data = await testFunctions.deleteTestData(req);
    return res.status(200).json({ message: "Deleted(^_^)", data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong.", error });
  }
};