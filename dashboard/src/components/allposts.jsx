import { Link } from "react-router";
// import { useEffect } from "react";
// import { useState } from "react";
//
// import { PostContext } from "../App";
// import { useNavigate } from "react-router-dom";
// import { Post } from "./post";
import "./allposts.css";

function AllPosts({ posts, setPosts, post, setPost, display, setDisplay }) {
  //   const [post, setPost] = useState(null);

  //   useEffect(() => {
  //     fetch("http://localhost:3000/posts", {
  //       method: "GET",
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log("post data");
  //         console.log(data);
  //         setPosts(data);
  //       });
  //   }, []);

  //   const navigate = useNavigate();

  const toggleEditing = (postToEdit) => {
    setPost(postToEdit);
    setDisplay("singlepost");
    // navigate("/dashboard/edit/" + id);
    // console.log(postToEdit.id);
    // console.log(postToEdit);
    // navigate("edit/" + postToEdit);
  };

  //   if (post == null) {
  return (
    <>
      <h1>Your Clog Dashboard</h1>
      {/* <Link to="/">
        <button>Create New Post</button>{" "}
      </Link> */}
      <div>
        <ul className="posts">
          {posts.map((pst) => {
            return (
              <li key={pst.id}>
                <b>{pst.title}</b>
                <br></br>
                {pst.body}
                <br></br>
                <br></br>
                {/* <form onSubmit={() => toggleEditing(pst)}> */}
                <button type="button" onClick={() => toggleEditing(pst)}>
                  Edit
                </button>
                {/* </form> */}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
  //   } else {
  //     return (
  //       <>
  //         <h1>This the outlet for {post.id}</h1>
  //         <Outlet context={[post, setPost]} />
  //       </>
  //     );
  //   }
}

export { AllPosts };
