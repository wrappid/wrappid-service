const { cacheActions, databaseActions } = require("@wrappid/service-core");

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
    let data = await databaseActions.create("application", "TestDatas", {
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
    let ressult = await databaseActions.update("application", "TestDatas", {
      req
    });
    // Update chache with data
    let cacheKey = req.params.id.toString();
    let data = JSON.stringify(req.params);
    await cacheActions.update("first", cacheKey, data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * @returns
 */
const readTestDataAll = async (req) => {
  try {
    //cache call to get data
    let cacheKey = "testData";
    let result = await cacheActions.read("first", cacheKey);
    if (result) {
      return result;
    } else {
      //Database call and update to cache
      let result = await databaseActions.findAll("application", "TestDatas");
      // Update chache with data
      let cacheKey = "testData";
      let data = JSON.stringify(result);
      await cacheActions.update("first", cacheKey, data);
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
}

/**
 *
 * @returns
 */
const readTestData = async (req) => {
  try {
    //cache call to get data
    let cacheKey = req.params.id.toString();
    let result = await cacheActions.read("first", cacheKey);
    if (result) {
      return result;
    } else {
      //Database call and update to cache
      let result = await databaseActions.findOne("application", "TestDatas", {
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
    let data = await databaseActions.delete("application", "TestDatas", {
      where: {
        id: req.params.id,
      },
    });
    cacheKey = req.params.toString();
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
  readTestDataAll,
  deleteTestData,
  sentMail
};
