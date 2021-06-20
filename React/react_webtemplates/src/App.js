import React, { useState, useEffect } from "react";
import axios from "axios";

import Posts from "./components/Posts";

function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      setLoading(false);
    };

    fetchPost();
  }, []);

  console.log("posts:", post);

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-primary mb-3">My Pagintaion Template</h1>
        <Posts posts={post} loading={loading} />
      </div>
    </div>
  );
}

export default App;
