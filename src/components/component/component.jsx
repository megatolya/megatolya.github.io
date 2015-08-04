let {Component} = require('react');

export default class MegatolyaComponent extends Component {
    getLocalizedData(name) {
        return require('../../../config')[this.props.lang][name];
    }

    get locale() {
        return this.props.lang;
    }
}
