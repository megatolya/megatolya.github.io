let React = require('react/addons');
let {Component} = React;

export default class Header extends Component {
    render() {
        return (
              <header role="banner" className="header">
                <hgroup>
                    <h1><a href="https://plus.google.com/+АнатолийОстровский">{this.props.author}</a></h1>
                    <h2>aka <a href="https://github.com/megatolya">megatolya</a></h2>
                </hgroup>
            </header>
        )
    }
};

module.exports = Header;
