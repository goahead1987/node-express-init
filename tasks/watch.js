'use strict';

var nodemon = require('gulp-nodemon');

module.exports = {
    task: function(gulp) {
        var PORT = gulp.env.PORT || 8001;
        var NODE_ENV = gulp.env.NODE_ENV || 'dev';
        nodemon({
            script: 'index.js',
            nodeArgs: ['--debug'],
            ext: 'js json',
            env: {
                'PORT': PORT,
                'NODE_ENV': NODE_ENV
            },
            watch: [
                'index.js',
                'app.js',
                'controllers/',
                'config/',
                'helpers/'
            ]
        });
    }
};
