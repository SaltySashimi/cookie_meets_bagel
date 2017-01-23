const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
// const connection = require('./db/connection.js');

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));


// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(port, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> 🚧  Webpack development server listening on port %s', port);
    }
});
