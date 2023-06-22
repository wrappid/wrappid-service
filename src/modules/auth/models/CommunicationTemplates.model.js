module.exports = (sequelize, DataTypes) => {
  const CommunicationTemplates = sequelize.define("CommunicationTemplates", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: null,
      // unique: true,
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    subject: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    header: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    contentType: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    message: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    footer: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    sampleSubject: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    sampleMessage: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    config: {
      type: DataTypes.JSONB,
      defaultValue: null,
    },
    externalTemplateId: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    externalStatus: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    externalReason: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    _status: {
      type: DataTypes.STRING,
    },
    extraInfo: {
      type: DataTypes.JSONB,
      defaultValue: null,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    deletedAt: {
      type: "TIMESTAMP",
      allowNull: true,
    },
  });

  CommunicationTemplates.associate = (models) => {
    CommunicationTemplates.belongsTo(models.Users, {
      foreignKey: "createdBy",
      as: "Owner",
      sourceKey: "id",
    });
    CommunicationTemplates.belongsTo(models.Users, {
      foreignKey: "updatedBy",
      as: "Updater",
      sourceKey: "id",
    });
    CommunicationTemplates.hasMany(models.MailComms, {
      foreignKey: "mailCommId",
      sourceKey: "id",
    });
    CommunicationTemplates.hasMany(models.SmsComms, {
      foreignKey: "smsCommId",
      sourceKey: "id",
    });
    CommunicationTemplates.hasMany(models.WhatsAppComm, {
      foreignKey: "smsCommId",
      sourceKey: "id",
    });
    CommunicationTemplates.belongsTo(models.Users, {
      foreignKey: "deletedBy",
      as: "Destroyer",
      sourceKey: "id",
    });
  };

  return CommunicationTemplates;
};
