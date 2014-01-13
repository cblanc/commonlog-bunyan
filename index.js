var bunyan = require("bunyan"),
		Logger = {
			logger: null,
			init: function (config) {
				this.logger = new bunyan.createLogger(config);
			}
		}

module.exports = Logger;