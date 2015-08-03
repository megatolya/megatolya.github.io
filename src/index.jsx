let routes = require('./routes.jsx');
var Router = require('react-router');
var React = require('react');

document.addEventListener('DOMContentLoaded', function () {
    Router.run(routes, Router.HistoryLocation, function (Handler) {
        React.render(<Handler/>, document.body);
    });
});
