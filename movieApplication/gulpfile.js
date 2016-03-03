var gulp =  require("gulp");
var react = require("gulp-react");
var browserify = require('browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var PATH = {
	JS : 'react_src/index.js',
	MINIFIED_OUT: 'build.min.js',
	DEST_JS : 'app/'
};

gulp.task('reactify',function(){
	return browserify(PATH.JS)
		.transform('babelify', {presets: ['es2015', 'react']})
		.bundle()
		.pipe(source(PATH.MINIFIED_OUT))
		.pipe(gulp.dest(PATH.DEST_JS));
});


gulp.task('default',['reactify'], function(){
	return gulp.watch('react_src/**/*.*',['reactify']);
});