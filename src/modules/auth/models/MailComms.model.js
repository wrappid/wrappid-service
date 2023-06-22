module.exports = (sequelize, DataTypes) => {
  const MailComms = sequelize.define("MailComms", {
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

  MailComms.associate = (models) => {
    MailComms.belongsTo(models.Users, {
      foreignKey: "createdBy",
      as: "Owner",
      sourceKey: "id",
    });
    MailComms.belongsTo(models.Users, {
      foreignKey: "updatedBy",
      as: "Updater",
      sourceKey: "id",
    });
    MailComms.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "User",
      sourceKey: "id",
    });
    MailComms.belongsTo(models.CommunicationTemplates, {
      foreignKey: "templateId",
      sourceKey: "id",
    });
    MailComms.hasOne(models.Otps, {
      foreignKey: "mailCommId",
      sourceKey: "id",
    });
    MailComms.belongsTo(models.Users, {
      foreignKey: "deletedBy",
      as: "Destroyer",
      sourceKey: "id",
    });
  };

  return MailComms;
};
