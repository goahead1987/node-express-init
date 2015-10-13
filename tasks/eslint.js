'use strict';

module.exports = {
    task: function(gulp) {
        var eslint = require('gulp-eslint');

        var src = [
            './public/js/**/*.js'
        ];

        return gulp.src(src)
            .pipe(eslint({
                useEslintrc: false,
                //rules: {},
                configFile: "./config/eslint.json"
            }))
            .pipe(eslint.format())
            .pipe(eslint.failOnError());
    }
};
