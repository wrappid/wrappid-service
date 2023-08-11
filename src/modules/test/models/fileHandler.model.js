let Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const fileHandler = sequelize.define(
    "FileHandlers",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fileUrl: DataTypes.TEXT,
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );

  return fileHandler;
};
