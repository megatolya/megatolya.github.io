require("babel/register");
var webpack = require("webpack");

webpack({
    context: __dirname,
    entry: './src/index.client.jsx',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    },
    output: {
        path: __dirname + "/dist",
        filename: "client.js"
    }
}, function(err, stats) {
    if (err) {
        console.log('err', err);
        console.log('stats', stats.toString());
    }
});

var fs = require('grunt').file;
var jade = require('jade');
var path = require('path');
var React = require('react');

var config = require('./config');
var App = React.createFactory(require('./src/components/app/app.jsx'));

var layoutTemplate = jade.compileFile(path.resolve(path.join(__dirname, 'src/views/layout.jade')));

Object.keys(config).forEach(function (lang) {
    var data = config[lang];

    data.text = fs.read('README.' + lang + '.md').split('\n').filter(Boolean);

    var html = layoutTemplate({
        lang: lang,
        meta: data,
        content: React.renderToString(App(data))
    });
    var filePath = path.resolve(path.join(__dirname, data.buildUrl));
    fs.mkdir(path.dirname(filePath));
    fs.write(filePath, html);
});
