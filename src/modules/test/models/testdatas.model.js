module.exports = (sequelize, DataTypes) => {
    const testdatas = sequelize.define("testdatas", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            defaultValue: "",
            type: DataTypes.STRING,
        },
    },
    { 
        createdAt: false, // don't add createdAt attribute
        updatedAt: false,
    });

    return testdatas;
};