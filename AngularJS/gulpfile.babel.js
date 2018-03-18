/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var babel = require('gulp-babel');
var plugins = require('gulp-load-plugins')();


gulp.task('watch', function () {
    gulp.watch('app/**/*.js', ['scripts']);
});

//Found on the internet
//add auto browser refresh on change for real project
gulp.task('scripts', function () {

    var sources = browserify({
        entries: "app/app.module.js",
        debug: true // Build source maps
    }).transform(babelify.configure({
        // You can configure babel here!
        // https://babeljs.io/docs/usage/options/
        presets: ["es2015"]
    }));
    return sources.bundle()
        .pipe(vinylSourceStream("app.min.js"))
        .pipe(vinylBuffer())
        .pipe(plugins.sourcemaps.init({
            loadMaps: true // Load the sourcemaps browserify already generated
        }))
        .pipe(plugins.sourcemaps.write('./', {
            includeContent: true
        }))
        .pipe(gulp.dest("Scripts/app"));

});
