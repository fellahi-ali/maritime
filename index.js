const maritime = require("./src/maritime.js");
const router = require("./src/router/router.js");
const static = require("./src/middleware/static.js");
const bodyParser = require("./src/middleware/bodyParser.js");
const renderingEngine = require("./src/renderingEngines.js");

module.exports = maritime;
module.exports.router = router;
module.exports.static = static;
module.exports.bodyParser = bodyParser;
module.exports.renderingEngine = renderingEngine;
