module.exports = (sequelize, DataTypes) => {
  const WhatsAppComms = sequelize.define("WhatsAppComms", {
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
    variable: {
      type: DataTypes.JSONB,
      defaultValue: null,
    },
    extraInfo: {
      type: DataTypes.JSONB,
      defaultValue: null,
    },
    response: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    _status: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    deletedAt: {
      type: "TIMESTAMP",
      allowNull: true,
    },
  });

  WhatsAppComms.associate = (models) => {
    WhatsAppComms.belongsTo(models.Users, {
      foreignKey: "createdBy",
      as: "Owner",
      sourceKey: "id",
    });
    WhatsAppComms.belongsTo(models.Users, {
      foreignKey: "updatedBy",
      as: "Updater",
      sourceKey: "id",
    });
    WhatsAppComms.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "User",
      sourceKey: "id",
    });
    WhatsAppComms.belongsTo(models.CommunicationTemplates, {
      foreignKey: "templateId",
      sourceKey: "id",
    });
    WhatsAppComms.belongsTo(models.Users, {
      foreignKey: "deletedBy",
      as: "Destroyer",
      sourceKey: "id",
    });
  };

  return WhatsAppComms;
};
