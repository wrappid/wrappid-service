const clientConnect = async (clientname) => {
    const cacheProvider = require("./cache.provider");
    cacheProvider[clientname].client.on('connect', function(){
        console.log('::--- Redis client connected ---::');
    });
    await cacheProvider[clientname].client.connect();
}

const cacheActions = {
    /**
     * 
    */
   read: async (clientname,cacheKey) => {
       try {
        const cacheProvider = require("./cache.provider");

        clientConnect(clientname);
        
        const value = await cacheProvider[clientname].client.get(cacheKey);
        await cacheProvider[clientname].client.disconnect();
        return value;

        } catch (error) {
            throw new Error(error);
        }
    },
    
    update:  async(clientname,data) => {
        try {    
            const cacheProvider = require("./cache.provider");   
            
        clientConnect(clientname);

            await cacheProvider[clientname].client.connect();
            let id = data['body']['id'].toString();
            let name = JSON.stringify(data['body']);
            
            const value = await cacheProvider[clientname].client.set(id,name);
            await cacheProvider[clientname].client.disconnect();
            
        } catch (error) {
            throw new Error(error);
        }
    },
    
    delete: async(clientname,cacheKey) => {
        try {
            console.log("hihahuuuu");
            const cacheProvider = require("./cache.provider");
            
            
        clientConnect(clientname);
            await cacheProvider[clientname].client.connect();
            

            let d = await cacheProvider[clientname].client.exists(cacheKey);
            if(d==1){
                await cacheProvider[clientname].client.del(cacheKey);
            }else{
                console.log("Key Not Present")
            }            
            
        } catch (error) {
            throw new Error(error);
        } finally {
            await cacheProvider[clientname].client.disconnect();
        }
    }
}

module.exports = cacheActions;