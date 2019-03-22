import React from 'react'

import './Comment.css'

class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comment: this.props.comment
        }
    }
    render(){
        return ( 
            <div>
                {this.state.comment.map(comment =>(
                    <div key={comment.id} className="commentContainer">
                        <p><span>{comment.username}: </span>{comment.text}</p>
                    </div>
                ))}
            </div>
        )
    }
        
       
    
}

export default Comment;