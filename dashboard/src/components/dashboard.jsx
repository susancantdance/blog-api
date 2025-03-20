import { useEffect, useState } from "react";
import { Post } from "./post";
import { AllPosts } from "./allposts";
import "./dashboard.css";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [display, setDisplay] = useState("allposts");

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
    <>
      {display == "allposts" ? (
        <AllPosts
          posts={posts}
          setPosts={setPosts}
          post={post}
          setPost={setPost}
          setDisplay={setDisplay}
          display={display}
        />
      ) : display == "singlepost" ? (
        <Post
          posts={posts}
          setPosts={setPosts}
          post={post}
          setPost={setPost}
          setDisplay={setDisplay}
          display={display}
        />
      ) : null}
    </>
  );
}

export { Dashboard };
