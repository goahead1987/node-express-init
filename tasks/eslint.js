/**
 * 使用eslint检查代码
 * */
'use strict';

module.exports = {
    task: function(gulp) {
        var eslint = require('gulp-eslint');

        var src = [
            'src/public/js/**/*.js',
            '!node_modules/**',
            '!**/node_modules/**'
        ];

        return gulp.src(src)
            .pipe(eslint({
                useEslintrc: false,
                //rules: {},
                configFile: "./config/taskconfig/eslint.json"
            }))
            .pipe(eslint.format())
            .pipe(eslint.failOnError());
    }
};
