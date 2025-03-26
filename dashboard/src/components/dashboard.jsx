import { useEffect, useState } from "react";
import { Post } from "./post";
import { AllPosts } from "./allposts";
import "./dashboard.css";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [display, setDisplay] = useState("allposts");
  //   const [comments, setComments] = useState(false);

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
  }, [display]);

  return (
    <>
      {display == "allposts" ? (
        <AllPosts posts={posts} setPost={setPost} setDisplay={setDisplay} />
      ) : display == "singlepost" ? (
        <Post post={post} setDisplay={setDisplay} />
      ) : display == "comments" ? (
        <Post post={post} setDisplay={setDisplay} comments={true} />
      ) : null}
    </>
  );
}

export { Dashboard };
