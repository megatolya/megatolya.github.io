import React from 'react/addons';
import Component from '../component/component.jsx';

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
                    src="//instansive.com/widgets/25d3d7f5f809853073df9ced2a113c7e405a724b.html"
                    scrolling="no"
                    allowTransparency="true"
                    className="instansive-widget"
                    style={styles}
                ></iframe>
            </noindex>
        );
    }
};
