[![Build Status](https://travis-ci.org/cblanc/commonlog-bunyan.png)](https://travis-ci.org/cblanc/commonlog-bunyan)

# Naive Common Log for Bunyan

Getting my head around Bunyan. Relies on module caching to retrieve the same instance of bunyan logger over and over again

## What it is...

```
var bunyan = require("bunyan"),
		logger;

module.exports = function (config) {
	if (!logger && config) {
		logger = new bunyan.createLogger(config);
	}
	return logger;
}
```

## Is this really necessary?

Probably not. But Node.js doesn't guarantee that a `require` with a local path will yield the same cached module

See here: http://nodejs.org/api/modules.html#modules_module_caching_caveats

## License

MIT