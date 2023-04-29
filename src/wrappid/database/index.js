const Sequelize = require("sequelize");
const config = require("../config");

const umsDB = new Sequelize(config.umsDB.name, config.umsDB.user, config.umsDB.pass, config.umsDB.options);
const prescriptionDB = new Sequelize(config.prescriptionDB.name, config.prescriptionDB.user, config.prescriptionDB.pass, config.prescriptionDB.options);
const dataDB = new Sequelize(config.dataDB.name, config.dataDB.user, config.dataDB.pass, config.dataDB.options);


module.exports = {
    umsDB,
    prescriptionDB,
    dataDB
}