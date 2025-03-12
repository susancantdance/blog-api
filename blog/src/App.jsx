import { useState } from "react";
import { useEffect } from "react";
import { Comments } from "./comments.jsx";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("post data");
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <h1>Clog (Cat Log)</h1>
      <div className="posts">
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <b>{post.title}</b>
                <br></br>
                {post.body}
                <br></br>
                <Comments postid={post.id} key={post.id} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
