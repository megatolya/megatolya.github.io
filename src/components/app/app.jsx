var React = require('react/addons');
var Component = React.Component;

var Header = require('../header/header.jsx');
var MainInfo = require('../main-info/main-info.jsx');
var Footer = require('../footer/footer.jsx');
var InstagramFrame = require('../instagram-frame/instagram-frame.jsx');

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
}
