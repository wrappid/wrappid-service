module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: "",
      // unique: true
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: "",
      // unique: true
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    availableTokens: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    firstLogin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    _status: {
      type: DataTypes.STRING,
    },
    deletedAt: {
      type: "TIMESTAMP",
      allowNull: true,
    },
  });

  Users.associate = (models) => {
    Users.hasOne(models.Persons, {
      foreignKey: "userId",
      sourceKey: "id",
      as: "Person",
    });
    Users.belongsTo(models.Roles, {
      as: "Role",
      foreignKey: "roleId",
      sourceKey: "id",
    });
    Users.hasMany(models.UserPermissions, {
      foreignKey: "userId",
      sourceKey: "id",
    });
    Users.hasMany(models.MailComms, {
      foreignKey: "userId",
      sourceKey: "id",
    });
    Users.hasMany(models.SessionManager, {
      foreignKey: "userId",
      sourceKey: "id",
    });
    Users.hasMany(models.ApiLogs, {
      foreignKey: "userId",
      sourceKey: "id",
    });
    Users.hasMany(models.LoginLogs, {
      foreignKey: "userId",
      sourceKey: "id",
    });
    Users.hasMany(models.Payments, {
      foreignKey: "userId",
      sourceKey: "id",
    });
    Users.hasMany(models.Otps, {
      foreignKey: "userId",
      sourceKey: "id",
    });
    Users.hasMany(models.SmsComms, {
      foreignKey: "userId",
      sourceKey: "id",
    });
    Users.hasMany(models.UserTokens, {
      foreignKey: "userId",
      sourceKey: "id",
    });
    Users.hasOne(models.Applications, {
      foreignKey: "employeeId",
      sourceKey: "id",
    });
    Users.belongsTo(models.Users, {
      foreignKey: "deletedBy",
      as: "Destroyer",
      sourceKey: "id",
    });
    Users.belongsTo(models.Users, {
      foreignKey: "createdBy",
      as: "Owner",
      sourceKey: "id",
    });
    Users.belongsTo(models.Users, {
      foreignKey: "updatedBy",
      as: "Updater",
      sourceKey: "id",
    });
  };

  return Users;
};
