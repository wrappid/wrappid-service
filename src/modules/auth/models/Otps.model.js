module.exports = (sequelize, DataTypes) => {
  const otp = sequelize.define("Otps", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    otp: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: "sms",
    },
    extraInfo: {
      type: DataTypes.JSONB,
      defaultValue: null,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    _status: {
      type: DataTypes.STRING,
    },
    deletedAt: {
      type: "TIMESTAMP",
      allowNull: true,
    },
  });

  otp.associate = (models) => {
    otp.belongsTo(models.Users, {
      foreignKey: "createdBy",
      as: "Owner",
      sourceKey: "id",
    });
    otp.belongsTo(models.Users, {
      foreignKey: "updatedBy",
      as: "Updater",
      sourceKey: "id",
    });
    otp.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "User",
      sourceKey: "id",
    });
    otp.belongsTo(models.MailComms, {
      foreignKey: "mailCommId",
      sourceKey: "id",
    });
    otp.belongsTo(models.MailComms, {
      foreignKey: "smsCommId",
      sourceKey: "id",
    });
    otp.belongsTo(models.Users, {
      foreignKey: "deletedBy",
      as: "Destroyer",
      sourceKey: "id",
    });
  };

  return otp;
};
