require('dotenv').config({silent: true});
import  express = require('express');
import  favicon = require('serve-favicon');
import  logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
const app = express();

app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

if (process.env.NODE_ENV !== 'test') app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('./ngApp'));
app.use('/scripts', express.static('bower_components'));

app.use('/api', require('./api/file'));

app.get('/*', function(req, res, next) {
  if (/.js | .html | .css | templates | js | scripts/.test(req.path) || req.xhr) {
    return next({status: 404, message: 'Not Found' });
  } else {
    return res.render('index');
  }
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

app.use(function(err: any, req, res, next) {
  res.status(err.status || 500);

  let error = (app.get('env') === 'development') ? err : {};
  res.send({
    message: err.message,
    error: error
  });
});

export = app;
