'use strict';

var uglify = require('gulp-uglify');

var PATH = {
    src: [
        './public/**/*.js'
    ],
    dst: './build/public/'
};

module.exports = {
    task: function jsmin(gulp) {
        return gulp.src(PATH.src)
            .pipe(uglify({
                mangle: {except: ['$']}
            }))
            .pipe(gulp.dest(PATH.dst));
    }
};
