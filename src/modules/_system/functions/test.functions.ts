import { cacheActions, databaseActions } from "@wrappid/service-core";

/**
 *
 * @param {*} req
 * @returns
 */
export const readTestDataAll = async (res: any) => {
  try {
    let cacheKey = "testData";
    let result = await cacheActions.read("wrappid-cache", cacheKey);
    if (result) {
      return result;
    } else {
      //Database call and update to cache
      let result = await databaseActions.findAll("application", "TestDatas");
      // Update chache with data
      let cacheKey = "testData";
      let data = JSON.stringify(result);
      await cacheActions.update("wrappid-cache", cacheKey, data);
      return data;
    }
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {*} req
 * @returns
 */
export const readTestData = async (req: any) => {
  try {
    //cache call to get data
    let cacheKey = req.params.id.toString();
    let result = await cacheActions.read("wrappid-cache", cacheKey);
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
      await cacheActions.update("wrappid-cache", cacheKey, data);
      return data;
    }
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {*} req
 * @returns
 */
export const createTestData = async (req: any) => {
  try {
    let data = await databaseActions.create("application", "TestDatas", {
      req,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {*} req
 * @returns
 */
export const updateTestData = async (req: any) => {
  try {
    let result = await databaseActions.update(
      "application",
      "TestDatas",
      {
        data: { ...req.body },
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (result) {
      // Delete chache with data
      let cacheKey = req.params.toString();
      await cacheActions.delete("wrappid-cache", cacheKey);
    } else {
      throw new Error("Can't update entity in the database");
    }
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {*} req
 * @returns
 */
export const deleteTestData = async (req: any) => {
  try {
    let data = await databaseActions.delete("application", "TestDatas", {
      where: {
        id: req.params.id,
      },
    });
    let cacheKey = req.params.toString();
    await cacheActions.delete("wrappid-cache", cacheKey);

    return data;
  } catch (error) {
    throw error;
  }
};
