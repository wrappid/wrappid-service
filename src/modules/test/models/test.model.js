module.exports = (sequelize, DataTypes) => {
    const test = sequelize.define("Test", {
        id: {
            autoIncrement: true,
            primaryKey   : true,
            type         : DataTypes.INTEGER,
        },
        name: {
            defaultValue: "",
            type        : DataTypes.STRING,
        },
    });

    return test;
};