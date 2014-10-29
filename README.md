[![Build Status](https://travis-ci.org/cblanc/commonlog-bunyan.png)](https://travis-ci.org/cblanc/commonlog-bunyan)
[![Dependency Status](https://gemnasium.com/cblanc/commonlog-bunyan.png)](https://gemnasium.com/cblanc/commonlog-bunyan)

# Naive Common Log for Bunyan

Getting my head around Bunyan. Relies on module caching to retrieve the same instance of bunyan logger over and over again - i.e. To avoid this...

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