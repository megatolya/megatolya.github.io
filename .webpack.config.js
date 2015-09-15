var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var production = require('./enviroment').production;

function getConfig(target) {
    var isServer = target === 'server';
    var plugins = [
        new ExtractTextPlugin('app.css', {
            allChunks: true
        })
    ];

    if (production) {
        plugins = plugins.concat([
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.DedupePlugin()
        ]);
    }

    return {
        context: __dirname,
        entry: './src/index.jsx',
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel'
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
                },
            ]
        },
        output: {
            path: __dirname + '/dist',
            filename: target + '.js',
            libraryTarget: isServer
                ? 'commonjs'
                : 'var',
            sourcePrefix: '    '
        },
        plugins: plugins,
        node: isServer,
        target: isServer
            ? 'node'
            : 'web',
        externals: isServer
            ? /^[a-z\-0-9]+/
            : []
    };
}

module.exports = [
    getConfig('server'),
    getConfig('client')
];
