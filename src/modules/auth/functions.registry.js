/**
 * 
 */

const authFunctions = require("./functions/auth.functions")

const functionsRegistry = { 
    ...authFunctions 
};

module.exports = functionsRegistry;