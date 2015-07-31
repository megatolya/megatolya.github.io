var React = require('react/addons');

var Lang = require('../lang/lang.jsx');

var Footer = React.createClass({
    render: function () {
        return (
            <footer>
                <div className="lang-changer">
                    <a href="/en">Change language</a>
                    <Lang lang="gb"/>
                </div>
                <small className="copyright">© 2014&ndash;{new Date().getFullYear()} <a href="mailto:forgetthisbox@gmail.com">{this.props.author}</a></small>
            </footer>
        )
    }
});

module.exports = Footer;
