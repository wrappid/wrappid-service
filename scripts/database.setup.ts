#!/usr/bin/env node

/**
 * @description
 * This script will setup databases for wrappid-service project 
 * 
 * @todo
 * 
 */

console.log("####################################");
console.log("Setting up database for your project");
console.log("####################################");
import { Client } from "pg";
import { DataTypes, Sequelize } from "sequelize";
import config from "../.wrappid/runtime/service/config.json";
import ModelsRegistry from "../.wrappid/runtime/service/src/registry/ModelsRegistry";

const models:any = {};
const modelRegistry:any = ModelsRegistry as object;

interface ModelObject {
  database: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  model: Function; 
}

// eslint-disable-next-line @typescript-eslint/ban-types
type ModelType = Function;
type NewDataType = ModelType;


const newData: { [key: string]: NewDataType } = Object.fromEntries(
  Object.entries(modelRegistry).map(([key, value]: any) => [key, value.model])
);


//Check dabase configuration is given properly or not
function isEmptyObject(obj: object): boolean {
  try {
    const reqField = [ "name", "username", "password", "host", "port","dialect"];
    reqField.forEach((arryKey: string) => {
      if (!Object.prototype.hasOwnProperty.call(obj, arryKey)) {
        // console.log(`${arryKey} Not Provded in database configuration `);
        // throw new Error(`Provide ${arryKey} Not Provded in database configuration `);
        return false;
      }
    });
    return true;
  } catch (error:any) {
    console.log(error);
    throw error;
  }
  
}


/**
 * 
 * @param dbName 
 * @param sequelizeConfig 
 */
async function createDatabaseIfNotExists(dbName: string, sequelizeConfig: any) {
  // Connect to Postgres server without specifying a database
  const client = new Client({
    user: sequelizeConfig.username,
    password: sequelizeConfig.password,
    host: sequelizeConfig.host,
    port: sequelizeConfig.port,
  });
  await client.connect();
  try {
    // Check if the database exists
    const res = await client.query(`SELECT datname FROM pg_catalog.pg_database WHERE datname = '${dbName}'`);

    if (res.rowCount === 0) {
      console.log(`${dbName} database not found, creating it.`);
      await client.query(`CREATE DATABASE "${dbName}";`);
      console.log(`created database ${dbName}`);
    } else {
      console.log(`${dbName} database exists.`);
    }
  } finally {
    await client.end();
  }
}


async function setupDatabase( ) {
  try {
    config?.databases?.forEach(async (datbaseObj:any) => {
      if(!isEmptyObject(datbaseObj)){
        throw new Error("Datbase configuration not given!!");
      }
      const sequelizeConfig = {
        username: datbaseObj?.username,
        password: datbaseObj?.password,
        host: datbaseObj?.host,
        port: datbaseObj?.port,
        dialect: datbaseObj?.dialect,
      };
      // Create Database if not exist
      await createDatabaseIfNotExists(datbaseObj.database, sequelizeConfig);
      // Sequelize connection object
      const sequelize = new Sequelize(
        datbaseObj.database, //database
        datbaseObj?.username, //username
        datbaseObj?.password, //password
        {
          host: datbaseObj?.host, //host
          dialect: datbaseObj?.dialect, //dialect
        });

      // Creating  Model Instance for all model
      Object.keys(newData).forEach((modelname: string) => {
        const modelInstance = modelRegistry[modelname].model(
          sequelize,
          Sequelize
        );
        models[modelname] = modelInstance;
      });

      /**
       * @techoneel
       *  After Creating model Instance assoicate model and try to call sync() to create associate column but didn't work
       *  Ref: https://g.co/gemini/share/83dd941c91b7
       */

      /*
      Object.keys(models).forEach((modelName: string) =>  {
        try {
          models[modelName]?.associate(models);
          models[modelName](sequelize, DataTypes).sync({ force: true });
          // modelRegistry[modelName].model(sequelize, DataTypes).sync({ force: true });
        } catch (error: any) {
          console.error(
            `${modelName} not associated due to ${error?.message}`
          );
        }
      });
      */

      Object.keys(modelRegistry).forEach((model: string) => {
        if (Object.prototype.hasOwnProperty.call(modelRegistry, model)) {
          const modelObject:ModelObject = modelRegistry[model];
          if(modelObject.database === datbaseObj.name){
            modelObject.model(sequelize, DataTypes).sync({ force: false }); //create table if not exist
          }
        }
      });
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

setupDatabase();