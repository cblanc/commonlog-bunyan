var bunyan = require("bunyan"),
		logger;

module.exports = function (config) {
	if (!logger && config) {
		logger = new bunyan.createLogger(config);
	}
	return logger;
}