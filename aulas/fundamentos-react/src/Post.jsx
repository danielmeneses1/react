 
import React from 'react';
function Post(props) {
    return (
    <div>
        <strong>{props.author}</strong>
        <p>{props.content}</p>
    </div>
      
    );
  }
  
  export default Post;