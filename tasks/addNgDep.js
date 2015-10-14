'use strict';

var ngAnnotate = require('gulp-ng-annotate');

var PATH = {
    src: [
        './public/**/*.js'
    ],
    dst: './build/public/'
};

module.exports = {
    task: function jsmin(gulp) {
        return gulp.src(PATH.src)
            .pipe(ngAnnotate({
                //remove: true,
                add: true,
                single_quotes: true
            }));
            //.pipe(gulp.dest(PATH.dst));
    }
};
