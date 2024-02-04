import * as testFunctions from "./functions/test.functions";

const functionsRegistry = {
  readTestData: testFunctions.readTestData,
  readTestDataAll: testFunctions.readTestDataAll,
  createTestData: testFunctions.createTestData,
  updateTestData: testFunctions.updateTestData,
  deleteTestData: testFunctions.deleteTestData,
};
export { functionsRegistry };
