const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // logging framework
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const app = express();
const router = require('./router');

// const connection = require('./db/connection.js');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
app.use(morgan('combined'));
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
