const testFunctions = require("../functions/test.functions");
const databaseProvider = require("../../../wrappid/database/provider.database");
const { constant } = require("../../../wrappid/constants/server.constant");

module.exports.testUploadFunc = async (req, res) => {
  try {
    console.log("req.file in test.controller", req.file);
    const body = req.file;
    const storageType = req.storageType;
    // console.log("storageType: ", req.storageType);
    // console.log("location: ", body);
    if (storageType === constant.storageType.AWS_S3) {
      await databaseProvider["application"].models[
        "FileHandlers"
      ].create({
        fileUrl: body.location,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

// module.exports.testMultipleUploadFunc = async (req, res) => {
//   try {
//     console.log("req.files in test.controller", req.files);
//     const body = req.files;
//     const storageType = req.storageType;

//     console.log("body in test.controller", body);
//     console.log("storageType: ", storageType);

//     // if (storageType === constant.storageType.AWS_S3) {
//     //   await databaseProvider["application"].models[
//     //     "FileHandlers"
//     //   ].create({
//     //     fileUrl: body.location,
//     //   });
//       return res.status(200).json({ message: "Controller called"});
//     // }

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Something went wrong in controller" });
//   }
// };

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


module.exports.testSentMail = async (req, res) => {
  try{
    let mailoptions = { to: "pritam@rxefy.com"};
    let data = await testFunctions.sentMail(mailoptions);
    return res.status(200).json({ message: "Mail sent", data });
  }catch(error){
    console.log(error);
    return res.status(500).json({ message: "Something went wrong.", error });
  }
};