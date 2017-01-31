import React from 'react';

const PostsDisplay = ({posts}) => {

  function renderPosts() {
    if (posts.length != 0) {
      return posts.map((post) => {
        return (
          <div key={post.id}>
              <p>{post.name}</p>
              <p>{post.city}, {post.country}</p>
          </div>
        )
      });
    }
    else {
      return null;
    }
  }

  return (
    <div>
      <div className="main">
      </div>
      <h3>Send My Love</h3>
      <div className="love-chain">
        {renderPosts()}
      </div>
    </div>
  );
}

export default PostsDisplay;
