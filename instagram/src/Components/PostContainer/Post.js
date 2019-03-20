import React from 'react';

import './Post.css'
import Comment from '../CommentSection/Comment'

import { Heart } from 'react-feather'


import { MessageCircle } from 'react-feather'




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

                        <div className="userInput">
                            <div className="heart"><Heart/></div>   <div><MessageCircle/></div>
                              
                        </div>
                        <div>
                            <p className="likes">{post.likes} likes </p>
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