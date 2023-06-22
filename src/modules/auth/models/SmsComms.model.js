module.exports = (sequelize, DataTypes) => {
  const SmsComms = sequelize.define("SmsComms", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    from: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    to: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    retryCount: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    attachemnts: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    variable: {
      type: DataTypes.JSONB,
      defaultValue: null,
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

  SmsComms.associate = (models) => {
    SmsComms.belongsTo(models.Users, {
      foreignKey: "createdBy",
      as: "Owner",
      sourceKey: "id",
    });
    SmsComms.belongsTo(models.Users, {
      foreignKey: "updatedBy",
      as: "Updater",
      sourceKey: "id",
    });
    SmsComms.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "User",
      sourceKey: "id",
    });
    SmsComms.belongsTo(models.CommunicationTemplates, {
      foreignKey: "templateId",
      sourceKey: "id",
    });
    SmsComms.hasOne(models.Otps, {
      foreignKey: "smsCommId",
      sourceKey: "id",
    });
    SmsComms.belongsTo(models.Users, {
      foreignKey: "deletedBy",
      as: "Destroyer",
      sourceKey: "id",
    });
  };

  return SmsComms;
};
