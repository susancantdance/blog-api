// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { Header } from "./header.jsx";
// import { Comments } from "./comments.jsx";
// import { useOutletontext } from "react";
// import { PostContext } from "../App";

import "./post.css";

function Post({ posts, setPosts, post, setPost, display, setDisplay }) {
  console.log("THIS IS THE POST FUNCTION!");
  // const posts = useContext(PostContext);
  //   const navigate = useNavigate();
  //   const [post, setPost] = useState(null);
  //   const [author, setAuthor] = useState(null);
  //   const [comments, setComments] = useState(null);
  //   console.log(post);
  //   const { postid } = useParams();
  //   console.log(postid);
  console.log(post.id);

  const [formData, setFormData] = useState({
    title: post.title,
    body: post.body,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("jwtToken");
    try {
      const response = await fetch(`http://localhost:3000/posts/${post.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      // navigate("/preview" + postid);
      //   navigate("/");
    } catch (err) {
      console.error(JSON.stringify(err));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  //   useEffect(() => {
  //     fetch(`http://localhost:3000/posts/${post.id}`, {
  //       method: "GET",
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         // console.log("singlepost");
  //         console.log(data);
  //         setPost(data);
  //         // setAuthor(data.author);
  //         setFormData({ title: data.title, body: data.body });
  //       });
  //     // setComments(data.comments);
  //   }, [post, setPost]);

  return (
    <div>
      <h1>A Single Post</h1>
      <div className="post">
        <div key={post.id} className="postbody">
          <form className="formfields" onSubmit={handleSubmit}>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <br></br>
            {/* <p className="author">Author: {author.email}</p> */}
            Body:
            <textarea
              type="text"
              name="body"
              value={formData.body}
              onChange={handleChange}
            ></textarea>
            <button>Update Post</button>
            <br></br>
          </form>
          {/* <Link to="Dashboard">Go Back to Dashboard</Link> */}
        </div>
      </div>
    </div>
  );
}

export { Post };
