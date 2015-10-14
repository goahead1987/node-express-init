'use strict';

var concat = require('gulp-concat');

var PATH = {
    src: './public/js/**/*.js',
    dst: './build/public/'
};

module.exports = {
    task: function jsmin(gulp) {
        return gulp.src(PATH.src)
            .pipe(concat('all.js'))
            .pipe(gulp.dest(PATH.dst));
    }
};
