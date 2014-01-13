var assert = require("chai").assert,
		path = require("path"),
		fs = require("fs"),
		Tail = require("tail").Tail,
		randomstring = require("randomstring"),
		TIMEOUT = 100;

// Configure Logger
var logPath = path.join(__dirname, "logs/test.log");
		config = {
			name: "Common log test",
			streams: [{
				path: logPath,
				level: "trace"
			}]
		},
		log = require("../index.js")(config);

// Helper method
var emptyLog = function (callback) {
	fs.writeFile(logPath, "", function (error) {
		if (error) throw error;
		callback();
	});
}

describe("Writing to log path", function () {
	var tail, testMessage;

	beforeEach(function (done) {
		testMessage = randomstring.generate();
		emptyLog(done);
	});

	afterEach(function (done) {
		tail.unwatch();
		done();
	});

	after(function (done) {
		emptyLog(done);
	});

	it ("should write trace to log path", function (done) {
		tail = new Tail(logPath);
		tail.on("line", function (data) {
			var logLine = JSON.parse(data);
			assert.equal(logLine.level, 10);
			assert.equal(logLine.msg, testMessage);
			done();
		});
		// Let Tail catch its breath
		setTimeout(function () {
			log.trace(testMessage);
		}, TIMEOUT);
	});

	it ("should write trace to log path", function (done) {
		tail = new Tail(logPath);
		tail.on("line", function (data) {
			var logLine = JSON.parse(data);
			assert.equal(logLine.level, 20);
			assert.equal(logLine.msg, testMessage);
			done();
		});
		setTimeout(function () {
			log.debug(testMessage);
		}, TIMEOUT);
	});
	
	it ("should write info to log path", function (done) {
		tail = new Tail(logPath);
		tail.on("line", function (data) {
			var logLine = JSON.parse(data);
			assert.equal(logLine.level, 30);
			assert.equal(logLine.msg, testMessage);
			done();
		});
		setTimeout(function () {
			log.info(testMessage);
		}, TIMEOUT);
	});

	it ("should write warnings to log path", function (done) {
		tail = new Tail(logPath);
		tail.on("line", function (data) {
			var logLine = JSON.parse(data);
			assert.equal(logLine.level, 40);
			assert.equal(logLine.msg, testMessage);
			done();
		});
		setTimeout(function () {
			log.warn(testMessage);
		}, TIMEOUT);
	});

	it ("should write errors to log path", function (done) {
		tail = new Tail(logPath);
		tail.on("line", function (data) {
			var logLine = JSON.parse(data);
			assert.equal(logLine.level, 50);
			assert.equal(logLine.msg, testMessage);
			done();
		});
		setTimeout(function () {
			log.error(testMessage);
		}, TIMEOUT);
	});

	it ("should write fatals to log path", function (done) {
		tail = new Tail(logPath);
		tail.on("line", function (data) {
			var logLine = JSON.parse(data);
			assert.equal(logLine.level, 60);
			assert.equal(logLine.msg, testMessage);
			done();
		});
		setTimeout(function () {
			log.fatal(testMessage);
		}, TIMEOUT);
	});
});