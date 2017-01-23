var path = require('path');
var webpack = require('webpack');

var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        // './src_react_router_app/index.js',
        '/client/src/app.js',
        'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, '/client/dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        include: path.join(__dirname, '/client/src'),
        loaders: ['babel'],
        exclude: /node_modules/
      }]
    }
};

module.exports = config;
