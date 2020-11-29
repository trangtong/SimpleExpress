const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');
const db = require('MongoDB');

const homeRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const aboutRouter = require('./routes/about');
const checkoutRouter = require('./routes/checkout');
const contactRouter = require('./routes/contact');
const faqRouter = require('./routes/faq');
const productsRouter = require('./routes/products');
const registerRouter = require('./routes/register');
const signInRouter = require('./routes/signIn');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', {layout: false});

hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/checkout', checkoutRouter);
app.use('/contact', contactRouter);
app.use('/faq', faqRouter);
app.use('/products', productsRouter);
app.use('/register', registerRouter);
app.use('/signIn', signInRouter);


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
