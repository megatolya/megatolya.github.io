import React from 'react/addons';
import Component from '../component/component.jsx';

export default class Header extends Component {
    render() {
        return (
            <main>
                <article>
                    {this.getLocalizedData('text').map(function (str, i) {
                        return <p key={i}>{str}</p>
                    })}
                </article>
            </main>
        );
    }
};
