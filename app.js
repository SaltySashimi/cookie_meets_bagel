const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // logging framework
const router = require('./router');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

// var favicon = require('serve-favicon');

const app = express();

app.set('models', require('./server/models/'));

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: '*/*' })); // any incoming request regardless of type will be parsed as json

// Router
router(app);

// Frontend real time update and debugger
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(require('webpack-hot-middleware')(compiler));

module.exports = app;
