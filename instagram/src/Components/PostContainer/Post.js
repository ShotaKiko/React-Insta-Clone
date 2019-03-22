import React from 'react';
import PropTypes from "prop-types";

import './Post.css'
import Comment from '../CommentSection/Comment'

import { Heart } from 'react-feather'
import { MessageCircle } from 'react-feather'

function Post(props){
    // console.log(props)
    return(
        <div>
            <div>
            {props.post.length > 0 ? ( 
                props.post.map(post =>(
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
            ))
            ) : (<h2>Loading...</h2>)   }
            </div>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        // text: PropTypes.string.isRequired,

    })
    )
  };
  
  Post.defaultProps = {
    post: []
  };
export default Post;