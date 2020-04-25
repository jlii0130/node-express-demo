const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// add webpage api
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var about = require('./routes/about');
var contact = require('./routes/contact');
var prediction = require('./routes/prediction');
var prediction2 = require('./routes/prediction2');
var approach = require('./routes/approach');

const dbController = require('./app/api/dbconnection')
const sslController = require('./app/certificate/certificate')


var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ---- OAuth2.0 ---- //
// Helmet: enhance the security
app.use(helmet());
// enabling CORS for all requests
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', about);
app.use('/contact', contact);
app.use('/prediction', prediction);
app.use('/prediction2', prediction2);
app.use('/approach', approach);



app.use('/api', dbController);
app.use('/.well-known/acme-challenge', sslController)

   
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
