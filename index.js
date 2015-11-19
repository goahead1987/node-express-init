'use strict';

var debug = require('debug')('node-express-init:server');
var app = require('./app');

//app.set('port', process.env.PORT || 3000);
//app.set('env', process.env.NODE_ENV || 'production');

var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});
