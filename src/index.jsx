import React, {Component} from 'react';
import ReactDom from 'react-dom';

import './assets/style.css';

import Header from './components/Header';
import Pokemon from './components/Pokemon';
import Preloader from './components/Preloader/Preloader';
import Clock from './components/Clock';
import Counter from './components/Counter';
import Conter from "components/Counter";
import PostList from 'containers/PostListContainer';
import Loading from 'components/Loading/Loading';
import Posts from "components/Posts/Posts";


class App extends Component {
    render() {
         return (
            <div className="app">
                <PostList/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('main'));