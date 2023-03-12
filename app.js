const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const httpLogger = require('morgan');
const logger = require('node-color-log');

const usersRouter = require('./src/controller/users');
const trackablesRouter = require('./src/controller/trackables');
const entriesRouter = require('./src/controller/entries');

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(httpLogger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/trackables', trackablesRouter);
app.use('/entries', entriesRouter);

app.listen(port, () => logger.color('green').log('Server running'));
