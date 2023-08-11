// const upload = require("../utils/upload.utils");

// const filesHandlerMiddleware = ({ storageType, naming, validation }) => {
//   console.log(`Files Handler Middleware Called`);
//   try {
//     // logger implementation pending
//     return (req, res, next) => {
//       console.log("req.file in middleware 1", req.file);
//       console.log("calling upload.utils from middleware");
//       const file = upload({ storageType, naming });

//       console.log("req.file in middleware 2", file);

//       next();
//     };
//   } catch (error) {
//     console.error("Error", error);
//     // res.status(500).json({ error: error.message });
//   }
// };

// module.exports = filesHandlerMiddleware;
