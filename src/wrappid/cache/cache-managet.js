const { createClient } = require('redis');
const testFunctions = require("../../modules/test/functions/test.functions");
const {JSONCache} = require('redis-json');
const{ Redis } = require('ioredis');


   

const fun1 = async (req) =>{
        const client = createClient();
        await client.connect();

        client.on("error", (error) => {
            console.error(error);
        });

      try {  
        let id = req['body']['id'].toString()
        const value = await client.get(id);
        if (value) {
            return value;
        }else{
            
            let data = await testFunctions.readTestData(req);
            
            let id = data[0]['id'].toString();
            let name = JSON.stringify(data[0]);
            
            await client.set(id, name)
            return data;
        }
    }catch (error) {
        console.log(error)
    }
};

module.exports = {
    fun1
}
 



