import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loding .. </h2>;
  }
  return (
    <div className="Posts">
      <div className="container">
        <h3 className="text-primary mb-1">Posts</h3>
        <ul className="list-group mb-2">
          {posts.map((post) => (
            <li key={post.id} className="list-group-item mb-1">
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
