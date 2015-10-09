'use strict';

var watch = require('gulp-watch');
var nodemon = require('gulp-nodemon');

module.exports = {
    task: function(gulp) {
        nodemon({
            script: 'index.js',
            nodeArgs: ['--debug'],
            ext: 'js',
            watch: [
                'index.js',
                'app.js',
                'controllers/',
                'configs/',
                'helpers/',
                'models/'
            ]
        });
    }
};
