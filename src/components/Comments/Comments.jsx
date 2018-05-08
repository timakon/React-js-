import React, {Component} from 'react';
import './Comments.css'

export default class Comments extends Component {
    render() {
        const comments = [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 2,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla"
            }
        ]
        return (
            <div>
                {comments.map(item => <div className="Comments"> <p>Theme: {item.title}</p> <p>Comment: {item.body}</p><p className="User">User: {item.userId}</p></div>)}
            </div>
        )
    }
}