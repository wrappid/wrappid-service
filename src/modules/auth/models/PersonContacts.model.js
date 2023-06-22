module.exports = (sequelize, DataTypes) => {
  const PersonContacts = sequelize.define("PersonContacts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    data: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    primaryFlag: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    notificationFlag: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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

  PersonContacts.associate = (models) => {
    PersonContacts.belongsTo(models.Persons, {
      foreignKey: "personId",
      sourceKey: "id",
    });
    PersonContacts.belongsTo(models.Users, {
      foreignKey: "createdBy",
      as: "Owner",
      sourceKey: "id",
    });
    PersonContacts.belongsTo(models.Users, {
      foreignKey: "updatedBy",
      as: "Updater",
      sourceKey: "id",
    });
    PersonContacts.belongsTo(models.Users, {
      foreignKey: "deletedBy",
      as: "Destroyer",
      sourceKey: "id",
    });
  };

  return PersonContacts;
};
