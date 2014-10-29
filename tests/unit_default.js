// Thanks to: http://stackoverflow.com/questions/9609393/catching-console-log-in-node-js

var path = require("path")
var assert = require("chai").assert;

// Clear cache
var name = require.resolve(path.join(__dirname, "../index.js"));
delete require.cache[name];

var commonlog = require("../index.js");
var logger = commonlog.logger;

describe("Logger.logger default behaviour", function () {
	var oldStdWrite;
	var oldErrWrite;
	var log = [];

	beforeEach(function () {
		oldStdWrite = process.stdout.write;
		process.stdout.write = function (string, encoding, fd) {
			log.push(string);
		}
		process.stderr.write = function (string, encoding, fd) {
			log.push(string);
		}
		message = Math.floor(Math.random() * 100000).toString();
	});

	afterEach(function () {
		process.stdout.write = oldStdWrite;
		process.stderr.write = oldErrWrite;
		log = [];
	});

	describe(".warn", function () {
		it ("writes to console", function () {
			logger.warn(message);
			assert.isTrue(log.some(function (elem) {
				return message + "\n" === elem;
			}));
		});
	});
	describe(".info", function () {
		it ("writes to console", function () {
			logger.error(message);
			assert.isTrue(log.some(function (elem) {
				return message + "\n" === elem;
			}));
		});
	});
	describe(".error", function () {
		it ("writes to console", function () {
			logger.info(message);
			assert.isTrue(log.some(function (elem) {
				return message + "\n" === elem;
			}));
		});
	});
	describe(".debug", function () {
		it ("writes to console", function () {
			logger.debug(message);
			assert.isTrue(log.some(function (elem) {
				return message + "\n" === elem;
			}));
		});
	});
});

