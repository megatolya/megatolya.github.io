var React = require('react/addons');

var Footer = React.createClass({
    render: function () {
        return (
            <footer>
                <small className="copyright">© 2014&ndash;{new Date().getFullYear()} <a href="mailto:forgetthisbox@gmail.com">{this.props.author}</a></small>
            </footer>
        )
    }
});

module.exports = Footer;
