﻿var gulp = require("gulp");
var browserify = require("browserify");
var stringify = require("stringify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var exec = require("child_process").exec;

gulp.task("server", function(cb) {
	return exec("node server.js", function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task("build", function() {
	return browserify({ entries: "./src/app.js" })
		.transform(stringify([".html"]))
		.transform("babelify", { presets: ["es2015"] })
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("./src"));
});

gulp.task("watch", ["watch"], function() {
	gulp.watch("*.js", ["build"]);
});

gulp.task("default", ["server", "watch"]);