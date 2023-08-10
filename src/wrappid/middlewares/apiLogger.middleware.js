
const databaseProvider = require("../database/provider.database");
let Sequelize = require("sequelize");

const activityLogger = async (req, res, next) => {
  const ipAddress = req.socket.remoteAddress;
  console.log('::---'+ipAddress+'---::');

  console.log("::---- Hello activityLogger ----::");
  try {
    result = await databaseProvider["application"].models["api_request_logs"].create({
      ip: ipAddress,
      access_key: " ",
      endpoint: req.originalUrl,
      request: req.method,
      req_body: req.body,
      header_stack: req.headers,
      start_ts: Sequelize.literal('CURRENT_TIMESTAMP')
    });
  
    let id = result.id;
    let send = res.send;
    res.send = async function  (body) {
      await databaseProvider["application"].models["api_request_logs"].update({
        response : body,
        end_ts: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {where: {id:id}});
      await send.call(this, body);
  };

    // console.log('::---'+result.id+'---::')
    next();
    
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  activityLogger,
};
