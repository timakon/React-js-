import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './assets/style.css';
import Comments from './components/Comments/Comments'
import Clock from './components/Clock';
import Counter from './components/Counter';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
//            number: 1,
//            inputName: '',
//            inputAge: ''
        }
//      this.handleMinusClick =::this.handleMinusClick;
//        this.handlePlusClick =::this.handlePlusClick;
    }

    // handleMinusClick = () => {
    //     this.setState({
    //         number: --this.state.number
    //     })
    // }
    //
    // handlePlusClick = () => {
    //     this.setState({
    //         number: ++this.state.number
    //     })
    // }
    //
    // handleChange =(fieldName) => (e) => {
    //     this.setState({
    //         [fieldName]: e.target.value
    //     })
    // }

    render() {
        const {number, inputName, inputAge} = this.state;
        return (
            <div className="app">
                <Comments />
                {/*<input type="text" value={inputName} onChange={this.handleChange('inputName')}/>*/}
                {/*<input type="text" value={inputAge} onChange={this.handleChange('inputAge')}/>*/}
                {/*<Clock/>*/}
                {/*<Counter*/}
                    {/*number={number}*/}
                    {/*onPlusClick={this.handlePlusClick}*/}
                    {/*onMinusClick={this.handleMinusClick}*/}
                {/*/>*/}
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('main'));