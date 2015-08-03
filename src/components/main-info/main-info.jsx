let React = require('react/addons');
let {Component} = React;

export default class Header extends Component {
    render() {
        return (
            <main>
                <article>
                    {this.props.text.map(function (str, i) {
                        return <p key={i}>{str}</p>
                    })}
                </article>
            </main>
        )
    }
};
