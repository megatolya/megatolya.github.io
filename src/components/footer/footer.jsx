import React from 'react/addons';
import Component from '../component/component.jsx';
import {Link} from 'react-router';
import Lang from '../lang/lang.jsx';
import styles from './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className={styles.follow}>
                    <iframe src="https://ghbtns.com/github-btn.html?user=megatolya&type=follow&count=true" frameBorder="0" scrolling="0" width="160px" height="25px"></iframe>
                </div>
                <small className={styles.copyright}>© 2014&ndash;{new Date().getFullYear()} <a href="mailto:forgetthisbox@gmail.com">{this.getLocalizedData('author')}</a></small>
                <div className={styles.langChanger}>
                    <Link to={this.locale === 'ru' ? 'english' : 'default'}>
                        {this.getLocalizedData("changeLocale")}
                        <Lang lang={this.locale === 'ru' ? 'gb' : 'ru'}/>
                    </Link>
                </div>
            </footer>
        );
    }
};
