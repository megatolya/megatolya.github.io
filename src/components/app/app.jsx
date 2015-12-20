import React from 'react/addons';
import Component from '../component/component.jsx';
import Header from '../header/header.jsx';
import MainInfo from '../main-info/main-info.jsx';
import Footer from '../footer/footer.jsx';
import ChristmasDecoration from '../christmas-decoration/сhristmas-decoration.jsx';
import InstagramFrame from '../instagram-frame/instagram-frame.jsx';

import styles from './app.css';
import constants from '../../constants.css';

export default class App extends Component {
    render() {
        return (
            <div className={styles.root}>
                <ChristmasDecoration />
                <div className={styles.wrapper}>
                    <Header lang={this.props.lang}/>
                    <MainInfo lang={this.props.lang}/>
                    <InstagramFrame lang={this.props.lang}/>
                    <div className={constants.push}/>
                </div>
                <Footer lang={this.props.lang}/>
            </div>
        );
    }
};
