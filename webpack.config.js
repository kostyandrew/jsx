
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');
var path = require('path');
var fs = require("fs");

var plugins = [
    new webpack.ProvidePlugin({
        _: "lodash",
        moment: 'moment',
        Promise: 'bluebird'
    }),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': '"' + process.env.NODE_ENV + '"'
        }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en-gb|uk|ru)$/),
    new HtmlWebpackPlugin()
];
module.exports = {
    entry: {
        main: path.join(__dirname, "/app/index.js")
    },
    devtool: 'eval',
    output: {
        path: path.join(__dirname, "/public/"),
        chunkFilename: '[name].js?v=[chunkhash]',
        filename: '[name].js?v=[hash]',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: [
                    'style',
                    'css'
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: [
                    'style',
                    'css?importLoaders=1'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: plugins,
    resolveLoader: {
        root: path.join(__dirname, "node_modules")
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 8080,
        historyApiFallback: 'index.html'
    }
};