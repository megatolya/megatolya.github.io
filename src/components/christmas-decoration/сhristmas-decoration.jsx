import React from 'react/addons';

import Component from '../component/component.jsx';
import styles from './christmas-decoration.css';

export default class ChristmasDecoration extends Component {
    render() {
        return <div className={styles['christmas-decoration']} />;
    }
};
