var React = require('react/addons');

var MainInfo = React.createClass({
    render: function () {
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
});

module.exports = MainInfo;
