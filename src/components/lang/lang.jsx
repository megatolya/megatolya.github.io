var React = require('react/addons');

var Lang = require('../lang/lang.jsx');

var Lang = React.createClass({
    render: function () {
        var className = 'flag-icon flag-icon-' + this.props.lang;
        return (
            <span className={className}/>
        )
    }
});

module.exports = Lang;
