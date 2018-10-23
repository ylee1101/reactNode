// keys.js - figure out what set of credential to return
if (process.env.NODE_ENV === 'production') {
    // we are in production
    module.export = require("./prod");
} else {
    // we are in development
    module.export = require('./dev');
} 