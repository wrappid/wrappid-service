const { databaseActions } = require("@wrappid/service-core");

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
    let data = await databaseActions.create("application", "testdatas", {
      req,
    });
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
    const { cacheActions } = require("../../../wrappid/index");
    const { databaseActions } = require("../../../wrappid/index");
    let ressult = await databaseActions.update("application", "testdatas", {
      req,
    });
    // Update chache with data
    let cacheKey = req["body"]["id"].toString();
    let data = JSON.stringify(req["body"]);
    await cacheActions.update("first", cacheKey, data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 *
 * @returns
 */

const readTestData = async (req) => {
  try {
    //cache call to get data
    const { cacheActions } = require("../../../wrappid/index");
    let cacheKey = req["body"]["id"].toString();
    let result = await cacheActions.read("first", cacheKey);
    if (result) {
      return result;
    } else {
      //Database call and update to cache
      const { databaseActions } = require("../../../wrappid/index");
      let result = await databaseActions.findOne("application", "testdatas", {
        req,
      });
      // Update chache with data
      let cacheKey = result[0]["id"].toString();
      let data = JSON.stringify(result[0]);
      await cacheActions.update("first", cacheKey, data);
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
};

/**
 *
 */
const deleteTestData = async (req) => {
  try {
    const { cacheActions } = require("../../../wrappid/index");
    const { databaseActions } = require("../../../wrappid/index");
    let data = await databaseActions.delete("application", "testdatas", {
      where: {
        id: req["body"]["id"],
      },
    });
    cacheKey = req["body"]["id"].toString();
    await cacheActions.delete("first", cacheKey);

    //if present in cache then delete from cache

    return data;
  } catch (error) {
    throw new Error(error);
  }
};


const sentMail = async (mailoptions) => {
  try {
   const mail = require("./../../../wrappid/communication/sentMail")
   return await mail.sentMail(mailoptions);
  }catch (error) {
    throw new Error(error);
  }
};


module.exports = {
  testFunc1,
  testFunc2,
  createTestData,
  updateTestData,
  readTestData,
  deleteTestData,
  sentMail
};
