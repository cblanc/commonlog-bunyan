var bunyan = require("bunyan"),
		Logger = {};

Logger.logger = {
	info: console.info,
	debug: console.info,
	error: console.error,
	warn: console.warn
};

Logger.init =  function (config) {
	Logger.logger = new bunyan.createLogger(config);
};

Logger.logTime = function (t, message) {
	message = message || {};
	message.time = process.hrtime(t)[1] / 1000000;
	Logger.logger.debug(message);
}

module.exports = Logger;