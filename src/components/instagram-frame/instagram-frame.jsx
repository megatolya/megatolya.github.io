var React = require('react/addons');

var InstagramFrame = React.createClass({
    render: function () {
        return (
            <noindex>
                <script src="//instansive.com/widget/js/instansive.js"></script>
                <iframe
                    src="//instansive.com/widgets/2fd0cfa465d9314a0b9f2ea842ec9cccab51cbae.html"
                    id="instansive_2fd0cfa465"
                    name="instansive_2fd0cfa465"
                    scrolling="no"
                    allowTransparency="true"
                    className="instansive-widget"
                ></iframe>
            </noindex>
        )
    }
});

module.exports = InstagramFrame;
