import React from 'react'


import PropTypes from "prop-types";
// import Comment from './Components/CommentSection/Comment'

function Post (props){
    console.log(props);
    
  return (
    <div>
      {props.post.map(post => (
        <div key={post.timestamp} className="userPostContainer">
          
          <div className="postHeader">
            <img src={post.thumbnailUrl} alt={post.username} className="headerImage"/>
            <h4>{post.username}</h4>
          </div>
          
          <div className="postImageContainer">
            <img src={post.imageUrl} alt={post.username} />
          </div>
          
          <div className="likesContainer">
            <p>{post.likes} likes</p>
          </div>
          
          {/* <div className="commentbox">
            < Comment comment = {post.comments}/>
          </div>  */}
          {/* <div>{post.likes}</div> */}
        </div>
        
      ))}
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
     })
  )
};

Post.defaultProps = {
  post: []
};

export default Post;
