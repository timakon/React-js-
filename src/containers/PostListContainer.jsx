import React, {PureComponent} from 'react'

import Loading from 'components/Loading';
import PostList from 'components/Posts'

export default class PostListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            page: 1,
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1')
            .then((response) => response.json())
            .then((posts) => {
                this.setState({posts, loading: false});
            })
            .catch(() => {
                this.setState({posts: [], loading: false});
            })
    }

    render() {
        const {loading, posts} = this.state
        return (
            loading ? <Loading/> : <PostList posts={posts}/>
        );
    }
}