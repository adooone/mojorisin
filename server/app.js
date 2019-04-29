const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const photosRouter = require('./routes/photos');
const loginRouter = require('./routes/login');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/photos', photosRouter);
app.use('/login', loginRouter);
app.use(express.static(path.join(__dirname, '../docs', '/')));

if (!process.env.PRODUCTION) console.log('=== development mode ===');
if (process.env.PRODUCTION) console.log('=== production mode ===');
console.log(`=== ${ process.env.NODE_ENV } ===`);
module.exports = app;
