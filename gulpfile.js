'use strict';

// Promise for for ops
require('global').Promise = require('pinkie-promise');

var gulp = require('gulp');
var requireDir = require('require-dir');
var tasks = requireDir('./tasks');

for (var task in tasks) {
	if (tasks.hasOwnProperty(task)) {
		gulp.task(task, tasks[task]['deps'] || [], (function (gulp, tasks, task) {
			return function () {
				return tasks[task]['task'](gulp);
			};
		})(gulp, tasks, task));
	}
}

gulp.task('default', [
	'del'
]);