var multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const config = require("../config/config.json");

const env = process.env.NODE_ENV || "development";
const region = config[env].region;
const accessKeyId = config[env].accessKeyId;
const secretAccessKey = config[env].secretAccessKey;
const s3Bucket = config[env].bucket;
const acceptedType = ["pdf", "doc", "docx", "jpg", "jpeg", "png"];

aws.config.update({
  region: region, // Put your aws region here
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});

var s3 = new aws.S3({
  /* ... */
});

// if (
//   process.env.NODE_ENV == "production" ||
//   process.env.NODE_ENV == "test" ||
//   process.env.NODE_ENV == "development"
// ) {
  module.exports.uploadS3 = multer({
    storage: multerS3({
      s3: s3,
      bucket: s3Bucket,
      acl: "public-read",
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: function (req, file, cb) {
        // console.error('file.originalname.split(".") = ', file.originalname.split('.'));
        // cb(null, "prescriptionDocuments/"+Date.now().toString()+"."+file.originalname.split('.')[1])
        console.error(
          'file.originalname.split(".") = ',
          file.originalname.split(".")
        );
        temp = file.originalname.split(".");
        type = temp[temp.length - 1];
        console.error("type = ", type);
        if (acceptedType.indexOf(type) > -1) {
          cb(null, file.fieldname + "-" + Date.now().toString() + "." + type);
          // callback(null, file.fieldname + '-' + Date.now() +"."+ type);
        } else {
          throw "Wrong file type";
        }
      },
    }),
  });

//   module.exports.getPublicUrl = (originalName) => {
//     console.log(">>>>>>>>>>>>>>>>>>>> 2 originalName = ", originalName);
//     return (
//       "https://" + s3Bucket + ".s3-" + region + ".amazonaws.com/" + originalName
//     );
//   };
// } else {
  // var storage = multer.diskStorage({
  //   destination: function (req, file, callback) {
  //     callback(null, "./src/wrappid/prescriptionDocuments");
  //   },
  //   filename: function (req, file, callback) {
  //     console.error(
  //       'file.originalname.split(".") = ',
  //       file.originalname.split(".")
  //     );
  //     temp = file.originalname.split(".");
  //     type = temp[temp.length - 1];
  //     console.error("type = ", type);
  //     if (acceptedType.indexOf(type) > -1) {
  //       callback(null, file.fieldname + "-" + Date.now() + "." + type);
  //     } else {
  //       throw "Wrong file type";
  //     }
  //   },
  // });

  // module.exports.uploadLocal = multer({
  //   storage: storage,
  // });

//   module.exports.getPublicUrl = (originalName) => {
//     const originalPath = "./prescriptionDocuments/" + originalName;
//     console.log(">>>>>>>>>>>>>>>>>>>> originalPath = ", originalPath);
//     return originalPath;
//   };
// }

// module.exports.getFileName = (originalName) => {
//   const originalPath = originalName;
//   console.log(">>>>>>>>>>>>>>>>>>>> originalPath = ", originalPath);
//   return originalPath;
// };
