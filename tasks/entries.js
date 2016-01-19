/**
 * 替换文件版本
 * */
'use strict';

var search = require('gulp-search');

var PATH = {
    src: [
        './src/templates/**/*.html'
    ],
    dst: 'build/public/ver'
};

module.exports = {
    deps: ['copyto'],
    task: function (gulp) {

        return gulp.src(PATH.src)
            .pipe(search(/\$\{jscssDomain\}\/js\/.*\/.*\.js/g, function (item) {
                var obj = {},
                    key = item.replace('${jscssDomain}/js/', '').replace('.js', ''),
                    value = item.replace('${jscssDomain}/js/', './src/public/js/');
                obj[key] = value;
                return obj;
            }, {
                path: PATH.dst
                //filename: PATH.dst
            }));
    }
};
