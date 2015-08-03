let React = require('react/addons');
let {Component} = React;

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="follow">
                    <iframe src="https://ghbtns.com/github-btn.html?user=megatolya&type=follow&count=true" frameBorder="0" scrolling="0" width="160px" height="25px"></iframe>
                </div>
                <small className="copyright">© 2014&ndash;{new Date().getFullYear()} <a href="mailto:forgetthisbox@gmail.com">{this.props.author}</a></small>
            </footer>
        )
    }
};
