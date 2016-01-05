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
  filename: 'dev'
});
var devLog = require('main-dir/helpers/devLog.js');
var ignoreMd5 = require('main-dir/helpers/ignoreMd5.js');
var preJsTpl = require('main-dir/helpers/preJsTpl.js');
var browserify = require('browserify-middleware');

var useSession = require('main-dir/helpers/useSession.js');
/**自定义加载模块***/

var app = express();

/****设置环境变量****/
app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || 'dev');
/****设置环境变量****/

/**dev显示请求***/
if (app.get('env') === 'dev'){
  app.use(devLog());
}
/**dev显示请求***/

/**文件请求忽略md5***/
//if (app.get('env') === 'dev') {
//  app.use(ignoreMd5());
//}
/**文件请求忽略md5***/

/***js****/
if (app.get('env') === 'dev') {
  app.get('/js/*', preJsTpl);
}
/***js****/

// view engine setup
/**自定义juicer模板***/
if (app.get('env') !== 'dev') {
  app.set('views', path.join(__dirname, 'build/templates'));
}else{
  app.set('views', path.join(__dirname, 'src/templates'));
}
app.set('view engine', 'html');
app.engine('html', juicerExpressAdapter);
/**自定义juicer模板***/

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'src/public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/**配置session***/
useSession(app);
/**配置session***/

/**配置静态资源***/
if (app.get('env') !== 'dev') {
  app.use(express.static(path.join(__dirname, 'build/public')));
}else{
  app.use(express.static(path.join(__dirname, 'src/public')));
}
/**配置静态资源***/

/**自定义动态路由***/
app.use(enrouten({directory: 'controllers'}));
/**自定义动态路由***/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'dev') {
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
