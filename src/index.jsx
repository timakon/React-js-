import React, {Component} from 'react';
import ReactDom from 'react-dom';

import './assets/style.css';
import PostList from 'containers/PostListContainer';

class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="app">
                <PostList />
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('main'));