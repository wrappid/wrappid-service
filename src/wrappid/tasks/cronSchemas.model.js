let Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const CronSchema = sequelize.define(
    "CronSchemas",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.TEXT,
      expression: DataTypes.TEXT,
      cronModule: DataTypes.TEXT,

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      timestamps: true,
    }
  );

  return CronSchema;
};
