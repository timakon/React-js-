import React, {PureComponent} from 'react';

import Posts from 'components/Posts';
import Preloader from 'components/Preloader';
import Loading from 'components/Loading/Loading';

export default class Postlist extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
          posts: [],
          page:1,
          preloader:false,
          loading: false
        };
    }

    componentDidMount(){
        this.setState({preloader:true})
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=2&_page=1')
            .then((response) => response.json())
            .then((posts) => {
                this.setState({posts, preloader:false, page:1})
            })
            .catch(() =>{
                this.setState({posts:[], preloader: false})
            })
}

    OnClick = () => {
        this.setState({loading:true})
        const {page, posts} = this.state;
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${page + 1}`)
            .then((response) => response.json())
            .then((NewPosts) => {
                this.setState({posts: posts.concat(NewPosts), loading:false,page: page + 1});
            })
    }
    render(){
        const {preloader, posts, loading} = this.state;

            return(
            preloader ? <Preloader/> : loading ?  <div> <Loading /> <Posts onLoadClick={this.OnClick} posts={posts} /> </div> : <Posts onLoadClick={this.OnClick} posts={posts} />
    )
    }
}