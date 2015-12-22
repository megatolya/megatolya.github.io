import React from 'react/addons';
import Component from '../component/component.jsx';

import styles from './instagram-share-button.css';

export default class InstagramShareButton extends Component {
    render() {
        return (
            <a
                href="https://www.instagram.com/qwerty121/?ref=badge"
                className={styles.instabutton}>
                <img
                    src="//badges.instagram.com/static/images/ig-badge-view-24.png"
                    alt="Instagram" />
            </a>
        );
    }
};
