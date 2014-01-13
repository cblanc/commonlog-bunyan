[![Build Status](https://travis-ci.org/cblanc/commonlog-bunyan.png)](https://travis-ci.org/cblanc/commonlog-bunyan)

# Naive Common Log for Bunyan

Getting my head around Bunyan. Relies on module caching to retrieve the same instance of bunyan logger over and over again

## What it is...

```
var bunyan = require("bunyan"),
		Logger = {
			logger: null,
			init: function (config) {
				this.logger = new bunyan.createLogger(config);
			}
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

## License

MIT