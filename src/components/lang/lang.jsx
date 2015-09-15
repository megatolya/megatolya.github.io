import React from 'react/addons';
import Component from '../component/component.jsx';
import styles from './lang.css';

export default class Lang extends Component {
    render() {
        let className = [
            'flag-icon',
            'flag-icon-' + this.props.lang,
            styles.flagIcon
        ].join(' ');
        return (
            <span className={className}/>
        );
    }
};
