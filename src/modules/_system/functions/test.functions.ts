import { cacheActions, databaseActions } from "@wrappid/service-core";

/**
 *
 * @returns
 */
export const readTestDataAll = async () => {
  try {
    const cacheKey = "testData";
    const result = await cacheActions.read("wrappid-cache", cacheKey);
    if (result) {
      return result;
    } else {
      //Database call and update to cache
      const result = await databaseActions.findAll("application", "TestDatas");
      // Update chache with data
      const cacheKey = "testData";
      const data = JSON.stringify(result);
      await cacheActions.update("wrappid-cache", cacheKey, data);
      return data;
    }
  } catch (error) {
    console.log(error);
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
    const cacheKey = req.params.id.toString();
    const result = await cacheActions.read("wrappid-cache", cacheKey);
    if (result) {
      return result;
    } else {
      //Database call and update to cache
      const result = await databaseActions.findOne("application", "TestDatas", {
        req,
      });
      // Update chache with data
      const cacheKey = result[0]["id"].toString();
      const data = JSON.stringify(result[0]);
      await cacheActions.update("wrappid-cache", cacheKey, data);
      return data;
    }
  } catch (error) {
    console.log(error);
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
    const data = await databaseActions.create("application", "TestDatas", {
      req,
    });
    return data;
  } catch (error) {
    console.log(error);
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
    const result = await databaseActions.update(
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
      const cacheKey = req.params.toString();
      await cacheActions.delete("wrappid-cache", cacheKey);
    } else {
      throw new Error("Can't update entity in the database");
    }
  } catch (error) {
    console.log(error);
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
    const data = await databaseActions.delete("application", "TestDatas", {
      where: {
        id: req.params.id,
      },
    });
    const cacheKey = req.params.toString();
    await cacheActions.delete("wrappid-cache", cacheKey);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
