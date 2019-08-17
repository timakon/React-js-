import React, {PureComponent} from 'react';

export default class Clock extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },100)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render() {

        const { date } = this.state;

        return (
            <div>
                <h1>Date now</h1>
                <h2>{date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}