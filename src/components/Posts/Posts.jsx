import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

export default class Posts extends PureComponent {
    static propTypes = {
        posts: PropTypes.arrayOf(
            PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string, 
            body:PropTypes.string
         })),
        onLoadClick:PropTypes.func
    };
    
    static defaultProps = {
        posts: []
    };

    OnClick = (event) =>{
        const {onLoadClick} = this.props;
        if(typeof onLoadClick === 'function'){
            onLoadClick();
        }
        event.preventDefault();
    };
    
    render(){
        const {posts} = this.props;
        return(
            <ul>
                {posts.map((post) => <li><Post post={post} /></li>)}
                <button onClick={this.OnClick}>Load more</button>
            </ul>
        )
    }
}