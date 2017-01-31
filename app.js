const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // logging framework
const router = require('./router');

// var favicon = require('serve-favicon');

const app = express();
app.use(express.static(__dirname + '/public'))

app.set('models', require('./server/models/'));

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: '*/*' })); // any incoming request regardless of type will be parsed as json

// Router
router(app);

module.exports = app;
