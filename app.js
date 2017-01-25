const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // logging framework
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const router = require('./router');

// var favicon = require('serve-favicon');

const app = express();


// const sequelize = require('./db/sequelize.js');
// const User = require('./models/user.js');
// const mongoose = require('mongoose');

// DB Setup
app.set('models', require('./models')); // var User = app.get('models').User;
// mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: '*/*' })); // any incoming request will be parsed as json
router(app);

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});

// Webpack Compiler
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(require('webpack-hot-middleware')(compiler));


module.exports = app;
