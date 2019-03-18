import React from 'react';

import './Post.css'
import Comment from '../CommentSection/Comment'



function Post(props){
    console.log(props)
    return(
        <div>
            <div>
            {props.post.map(post =>(
                <div key={post.id} className="postContentContainer">
                    <div className="postHeader">
                        <img src={post.thumbnailUrl} alt={post.username} className="userThumbnail"/>
                        <h4>{post.username}</h4>
                    </div>

                    <div className="postImageContainer">
                        <img src={post.imageUrl} alt={post.username} className="postImage"/>
                    </div>

                    <div className="interactionContainer">

                        <div>
                            <button>Like</button>   <button>Comment</button>
                        </div>
                        <div>
                            <p>{post.likes} likes </p>
                        </div>
                    
                    </div>

                    <div><Comment comment={post.comments}/></div>
                    
                    <div className="timeContainer">
                        <p>{post.timestamp}</p>
                    </div>
                
                </div>
            ))}
            </div>
            
        </div>
    )

}
/*~~~~~~~~~~~~~~~~~~~~~~ Note:add icons later ~~~~~~~~~~~~*/
export default Post;