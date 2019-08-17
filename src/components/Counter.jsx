import React, {PureComponent} from 'react';

export default class Conter extends PureComponent{
    render(){
        const {number, plus, minus} = this.props;

        return(
            <div>
                <button onClick={plus}>+</button>
                {number}
                <button onClick={minus}>-</button>
            </div>
        )
    }
}