import React, {Component} from 'react';

export default class Counter extends Component {
    render() {
        const {number, onPlusClick, onMinusClick} = this.props
        return (
            <div>
                <button onClick={onPlusClick}>+</button>
                {number}
                <button onClick={onMinusClick}>-</button>
            </div>
        )
    }
}