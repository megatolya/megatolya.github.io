let React = require('react/addons');
let {Component} = React;

let Header = require('../header/header.jsx');
let MainInfo = require('../main-info/main-info.jsx');
let Footer = require('../footer/footer.jsx');
let InstagramFrame = require('../instagram-frame/instagram-frame.jsx');

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="wrapper">
                    <Header author={this.props.author}/>
                    <MainInfo text={this.props.text}/>
                    <InstagramFrame/>
                    <div className="push"/>
                </div>
                <Footer author={this.props.author}/>
            </div>
        )
    }
};
