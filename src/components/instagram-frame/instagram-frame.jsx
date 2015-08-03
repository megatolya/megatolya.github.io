let React = require('react/addons');
let {Component} = React;

export default class InstagramFrame extends Component {
    render() {
        var styles = {
            width: '100%',
            border: '0',
            overflow: 'hidden',
            height: '400px'
        };

        return (
            <noindex>
                <script src="//instansive.com/widget/js/instansive.js"></script>
                <iframe
                    //src="//instansive.com/widgets/2f2ea965452a93353f77df071b06a2f02cfcae4e.html"
                    src="//instansive.com/widgets/25d3d7f5f809853073df9ced2a113c7e405a724b.html"
                    scrolling="no"
                    allowTransparency="true"
                    className="instansive-widget"
                    style={styles}
                ></iframe>
            </noindex>
        )
    }
};
