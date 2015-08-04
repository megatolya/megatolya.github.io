let React = require('react/addons');
let Component = require('../component/component.jsx');
let {Link} = require('react-router');
let Lang = require('../lang/lang.jsx');

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="follow">
                    <iframe src="https://ghbtns.com/github-btn.html?user=megatolya&type=follow&count=true" frameBorder="0" scrolling="0" width="160px" height="25px"></iframe>
                </div>
                <small className="copyright">© 2014&ndash;{new Date().getFullYear()} <a href="mailto:forgetthisbox@gmail.com">{this.getLocalizedData('author')}</a></small>
                <div className="lang-changer">
                    <Link to={this.locale === 'ru' ? 'english' : 'default'}>
                        {this.getLocalizedData("changeLocale")}
                        <Lang lang={this.locale === 'ru' ? 'gb' : 'ru'}/>
                    </Link>
                </div>
            </footer>
        );
    }
};
