import React from "react";

function Pagination(postPerPage, totalPosts) {
  var currentPosts = [];
  for (var i = 0; i < postPerPage / totalPosts; i++) {
    currentPosts.push(totalPosts[i]);
  }

  return (
    <div container="Posts">
      <h1 className="text-primary mb-4">Posts</h1>
      <div classname="list-group mb-4">
        {currentPosts.map((post) => {
          <p id={post.id} className="list-item mb-2">
            {post}
          </p>;
        })}
      </div>
    </div>
  );
}

export default Pagination;
