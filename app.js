var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/**自定义加载模块***/
var juicerExpressAdapter = require('juicer-express-adapter');
var enrouten = require('express-enrouten');
var configRumtime = require('config-realtime');
configRumtime.init({
  readRuntime: true,
  filename: 'production'
});
/**自定义加载模块***/

var app = express();

/**自定义动态路由***/
app.use(enrouten({directory: 'controllers'}));
/**自定义动态路由***/

// view engine setup
/**自定义juicer模板***/
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'html');
app.engine('html', juicerExpressAdapter);
/**自定义juicer模板***/

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
