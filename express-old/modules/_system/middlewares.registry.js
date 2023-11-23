const testMiddleware = require("./middlewares/test.middleware");

const middlewaresRegistry = {
    "testMiddleware": testMiddleware
 };

exports.middlewaresRegistry = middlewaresRegistry;