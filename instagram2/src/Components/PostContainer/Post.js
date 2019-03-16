import React from 'react'


import PropTypes from "prop-types";

function Post (props){
    console.log(props);
  return (
    <>
      {props.post.map(post => (
        <div key={post.username} className="userPostContainer">
          <img src={post.thumbnailUrl} alt={post.username} />
          <img src={post.imageUrl} alt={post.username} />
          <div>{post.likes}</div>
          <div>{post.timestamp}</div>
        </div>
      ))}
    </>
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
