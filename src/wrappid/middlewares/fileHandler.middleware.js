const upload = require("../utils/upload.utils");

const fileHandler = ({storageType, filename}) => (req, res, next) => {
  try {
    console.log("File Handler middleware called");

    req.storageType = storageType;
    upload({storageType, filename, req, res, next});

    res.status(200).json({message: "FileHandler middleware res.status"});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong in middleware" });
  }
};

// const filesHandler = ({storageType, files}) => (req, res, next) => {
//   try {
//     console.log("FilesHandler in middleware called");

//     req.storageType = storageType;
//     upload({storageType, files, req, res, next});

//     res.status(200).json({message: "Calling FilesHandler in middleware"});    
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({message: "Somethin went wrong in middleware"});
//   }
// };

module.exports = fileHandler;

// module.exports = {
//   fileHandler,
//   filesHandler
// };
