const upload = require("../utils/upload.utils");

const fileHandler = ({storageType, filename}) => (req, res, next) => {
  try {
    console.log("File Handler middleware called");

    req.storageType = storageType;
    upload({storageType, filename, req, res, next});

    res.status(200).json({message: "FileHandler middleware res.status"});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = fileHandler;
