import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import './Post.css'

export default class Post extends PureComponent {
    static propTypes = {
        post: PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string,
                body:PropTypes.string
            }).isRequired
    }

    render(){
        const {post} = this.props
        return(
            <div className="div">
                <h3> {post.id}</h3>
                <h3 className="h3">{post.title}</h3>
                <p className="p">{post.body}</p>

            </div>
        )
    }
}