var fs = require('grunt').file;
var jade = require('jade');
var path = require('path');
var React = require('react');
var Router = require('react-router');

var config = require('./config');
var routes = require('./dist/server');

var layoutTemplate = jade.compileFile(path.resolve(path.join(__dirname, 'src/views/layout.jade')));

Object.keys(config).forEach(function (lang) {
    var data = config[lang];
    var url = lang === 'ru' ? '' : ('/' + lang + '/');
    Router.run(routes, url, function(Handler, state) {
        var html = layoutTemplate({
            lang: lang,
            meta: data,
            content: React.renderToString(React.createElement(Handler))
        });
        var filePath = path.resolve(path.join(__dirname, data.buildUrl));
        fs.mkdir(path.dirname(filePath));
        fs.write(filePath, html);
        console.log(filePath, 'done');
    });
});
