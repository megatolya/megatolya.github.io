let React = require('react/addons');
let Component = require('../component/component.jsx');
var {RouteHandler} = require('react-router');

let Header = require('../header/header.jsx');
let MainInfo = require('../main-info/main-info.jsx');
let Footer = require('../footer/footer.jsx');
let InstagramFrame = require('../instagram-frame/instagram-frame.jsx');

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="wrapper">
                    <Header lang={this.props.lang}/>
                    <MainInfo lang={this.props.lang}/>
                    <InstagramFrame lang={this.props.lang}/>
                    <div className="push"/>
                </div>
                <RouteHandler />
                <Footer lang={this.props.lang}/>
            </div>
        );
    }
};
