var React = require('react/addons');

var InstagramFrame = React.createClass({
    render: function () {
        var styles = {
            width: '100%',
            border: '0',
            overflow: 'hidden',
            height: '400px'
        };

        return (
            <noindex>
                <script src="//instansive.com/widget/js/instansive.js"></script>
                <iframe src="//instansive.com/widgets/2f2ea965452a93353f77df071b06a2f02cfcae4e.html"
                    id="instansive_2f2ea96545"
                    name="instansive_2f2ea96545"
                    scrolling="no" allowTransparency="true"
                    className="instansive-widget"
                    style={styles}
                    test="123"
                ></iframe>
            </noindex>
        )
    }
});

module.exports = InstagramFrame;
