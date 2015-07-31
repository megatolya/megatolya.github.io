var React = require('react/addons');

var Lang = require('../lang/lang.jsx');

var Footer = React.createClass({
    render: function () {
        return (
            <footer>
                <div className="follow">
                    <iframe src="https://ghbtns.com/github-btn.html?user=megatolya&type=follow&count=true&size=large" frameBorder="0" scrolling="0" width="220px" height="30px"></iframe>
                </div>
                <small className="copyright">© 2014&ndash;{new Date().getFullYear()} <a href="mailto:forgetthisbox@gmail.com">{this.props.author}</a></small>
            </footer>
        )
    }
});

module.exports = Footer;
                //<div className="lang-changer">
                    //<a href="/en">Change language</a>
                    //<Lang lang="gb"/>
                //</div>
                //<
