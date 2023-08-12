const databaseProvider = require("../database/provider.database");
let Sequelize = require("sequelize");

const apiLogger = async (req, res, next) => {
  try {
    result = await databaseProvider["application"].models[
      "ApirequestLogs"
    ].create({
      ip: req.socket.remoteAddress,
      access_key: " ",
      endpoint: req.originalUrl,
      request: req.method,
      req_body: req.body,
      header_stack: req.headers,
      start_ts: Sequelize.literal("CURRENT_TIMESTAMP"),
    });

    let id = result.id;
    let send = res.send;
    let res_body;
    res.send = async function (body) {
      res_body = body;
      await send.call(this, body);
    };
    res.on("finish", async () => {
      await databaseProvider["application"].models["ApirequestLogs"].update(
        {
          response: res_body,
          response_header: res._headers,
          response_status: res.statusCode,
          end_ts: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        { where: { id: id } }
      );
    });

    next();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = apiLogger;
