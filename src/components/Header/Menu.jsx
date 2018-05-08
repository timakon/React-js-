import React, {Component} from 'react'

export default class Menu extends Component {
    render() {
        const {items} = this.props;

        return (
            <ul>
                {items.map((item) => <li> {item}</li>)}
            </ul>
        );
    }
}