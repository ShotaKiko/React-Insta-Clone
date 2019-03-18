import React from 'react';


function Post(props){
    console.log(props)
    return(
        <div>
            {props.post.map(post =>(
                <div key={post.id} className="postContentContainer">
                    <div className="postHeader">
                        <img src={post.thumbnailUrl} alt={post.username} className="userThumbnail"/>
                        <h4>{post.username}</h4>
                    </div>

                    <div className="postImageContainer">
                        <img src={post.imageUrl} alt={post.username}/>
                    </div>

                    <div>
                        pic
                    </div>
                    


                
                
                
                
                </div>
            ))}
            
            <div>howdy</div>
        
        
        </div>
    )

}

export default Post;