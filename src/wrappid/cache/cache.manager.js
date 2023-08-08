const { createClient } = require('redis');
const testFunctions = require("../../modules/test/functions/test.functions");
const {JSONCache} = require('redis-json');
const{ Redis } = require('ioredis');

   

const fun1 = async (req) =>{
    const client = createClient({
        username: '', // use your Redis user
        password: 'admin', // use your password here
        socket: {
            host: '127.0.0.1',
            port: 6379
        }
    });



    await client.connect();


    client.on('connect', function(){
        console.log('Redis client connected');
    });
    

      try {  
        let id = req['body']['id'].toString()
        const value = await client.get(id);
        if (value) {
            await client.disconnect();
            return value;
        }else{
            
            let data = await testFunctions.readTestData(req);
            
            let id = data[0]['id'].toString();
            let name = JSON.stringify(data[0]);
            
            await client.set(id, name)
            await client.disconnect();
            return data;
        }
   
    
    }catch (error) {
        console.log(error)
    }
};

module.exports = {
    fun1
}
 



