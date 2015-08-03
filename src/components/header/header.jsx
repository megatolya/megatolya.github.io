var React = require('react/addons');

var Header = React.createClass({
    componentDidMount: function () {
        console.log('lol');
    },
    render: function () {
        return (
              <header role="banner" className="header">
                <hgroup>
                    <h1><a href="https://plus.google.com/+АнатолийОстровский">{this.props.author}</a></h1>
                    <h2>aka <a href="https://github.com/megatolya">megatolya</a></h2>
                </hgroup>
            </header>
        )
    }
});

module.exports = Header;
