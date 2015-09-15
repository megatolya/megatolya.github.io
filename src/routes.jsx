let React = require('react/addons');
let {Component} = React;
let {Route, DefaultRoute, RouteHandler} = require('react-router');
let App = require('./components/app/app.jsx');
let _ = require('lodash');

let wrapComponent = (Component, props) => {
    return React.createClass({
        render: function() {
            return React.createElement(Component, props);
        }
    });
};

class Root extends Component {
    render() {
        return <RouteHandler />;
    }
}

module.exports = (
    <Route handler={Root} path="/">
        <DefaultRoute name="default" handler={wrapComponent(App, {lang: 'ru'})}/>
        <Route name="english" path="/en/" handler={wrapComponent(App, {lang: 'en'})}/>
    </Route>
);
