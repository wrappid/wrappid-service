module.exports = (sequelize, DataTypes) => {
  const Persons = sequelize.define("Persons", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    middleName: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    photoUrl: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    extraInfo: {
      type: DataTypes.JSONB,
      defaultValue: null,
    },
    height: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
    weight: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
    medicalId: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    phoneVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    emailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    dob: {
      type: "TIMESTAMP",
      defaultValue: new Date(),
    },
    gender: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    profileId: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    userInvitationToken: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    website: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    _status: {
      type: DataTypes.STRING,
    },
    deletedAt: {
      type: "TIMESTAMP",
      allowNull: true,
    },
  });

  Persons.associate = (models) => {
    Persons.belongsTo(models.Users, {
      foreignKey: "userId",
      sourceKey: "id",
      as: "User",
    });
    Persons.belongsTo(models.Users, {
      foreignKey: "createdBy",
      as: "Owner",
      sourceKey: "id",
    });
    Persons.belongsTo(models.Users, {
      foreignKey: "updatedBy",
      as: "Updater",
      sourceKey: "id",
    });
    Persons.belongsTo(models.Departments, {
      foreignKey: "departmentId",
      sourceKey: "id",
    });
    Persons.hasMany(models.PersonsRelations, {
      foreignKey: "PersonsId",
      sourceKey: "id",
      as: "Persons",
    });
    Persons.hasMany(models.PersonsContacts, {
      foreignKey: "PersonsId",
      sourceKey: "id",
    });
    Persons.hasMany(models.PersonsRelations, {
      foreignKey: "relatedPersonsId",
      sourceKey: "id",
      as: "RelatedPersonss",
    });
    Persons.hasOne(models.DoctorDetails, {
      foreignKey: "doctorId",
      sourceKey: "id",
    });
    Persons.hasMany(models.PersonsAddresses, {
      foreignKey: "PersonsId",
      sourceKey: "id",
    });
    Persons.hasMany(models.PersonsEducations, {
      foreignKey: "PersonsId",
      sourceKey: "id",
    });
    Persons.hasMany(models.PersonsExperiences, {
      foreignKey: "PersonsId",
      sourceKey: "id",
    });
    Persons.hasMany(models.PersonsDocs, {
      foreignKey: "PersonsId",
      sourceKey: "id",
    });
    Persons.hasMany(models.Appointments, {
      foreignKey: "doctorId",
      sourceKey: "id",
      as: "DoctorAppointments",
    });
    Persons.hasMany(models.Appointments, {
      foreignKey: "patientId",
      sourceKey: "id",
      as: "PatientAppointments",
    });
    Persons.belongsTo(models.Users, {
      foreignKey: "deletedBy",
      as: "Destroyer",
      sourceKey: "id",
    });
  };

  return Persons;
};
