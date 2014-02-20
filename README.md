[![Build Status](https://travis-ci.org/cblanc/commonlog-bunyan.png)](https://travis-ci.org/cblanc/commonlog-bunyan)

# Naive Common Log for Bunyan

Getting my head around Bunyan. Relies on module caching to retrieve the same instance of bunyan logger over and over again

## What it is...

```
var bunyan = require("bunyan"),
		Logger = {};

Logger.logger = null;

Logger.init =  function (config) {
	Logger.logger = new bunyan.createLogger(config);
};

Logger.logTime = function (t, message) {
	message = message || {};
	message.time = process.hrtime(t)[1] / 1000000;
	Logger.logger.debug(message);
}

module.exports = Logger;
```

## To avoid this...

```
logger = require("./lib/logger");
...
logger = require("../../lib/logger");
...
logger = require("../../../lib/logger");
...
```

## Other things

Added a convenience method to log time given an instance of process.hrtime

## License

MIT