import React from 'react'

import './Comment.css'

function Comment(props){
    return(
        <div>
            {props.comment.map(comment =>(
                <div key={comment.id} className="commentContainer">
                    <p><span>{comment.username}: </span>{comment.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Comment;