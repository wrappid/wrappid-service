const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

/**
 * @todo
 * must implement winston for logging
 * 
 * This logging module built with morgan
 * 
 * @param {*} app 
 */
const setupLogging = (app) => {
    // log only 4xx and 5xx responses to console
    app.use(morgan('dev', {
        skip: function (req, res) { return res.statusCode < 400 }
    }));
 
    // log all requests to access.log
    app.use(morgan('common', {
        stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
    }));
}

module.exports = setupLogging