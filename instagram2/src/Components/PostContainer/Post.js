import React from 'react'


import PropTypes from "prop-types";

function Post (props){
    console.log(props);
  return (
    <>
      {props.instaFeed.map(instaFeed => (
        <div key={instaFeed.username} className="userPostContainer">
          <img src={instaFeed.thumbnailUrl} alt={instaFeed.username} />
          <img src={instaFeed.imageUrl} alt={instaFeed.username} />
          <div>{instaFeed.likes}</div>
          <div>{instaFeed.timestamp}</div>
        </div>
      ))}
    </>
  );
}

export default Post;
