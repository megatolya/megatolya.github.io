let React = require('react/addons');
let {Component} = React;

export default class Lang extends Component {
    render() {
        let className = 'flag-icon flag-icon-' + this.props.lang;
        return (
            <span className={className}/>
        )
    }
};
