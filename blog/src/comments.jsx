import { useState } from "react";
import { useEffect } from "react";

import "./comments.css";

function Comments({ postid }) {
  const [comments, setComments] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const url = `http://localhost:3000/posts/${postid}/comments`;
    console.log(url);
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("DATA");
        console.log(data);
        setComments(data);
      });
  }, [postid]);

  if (clicked && comments.length > 0) {
    return (
      <>
        <p>Comments ({comments.length})</p>
        <ul>
          {comments.map((cmt) => {
            return (
              <li key={cmt.id}>
                {cmt.text}
                <br></br>author: {cmt.id}
              </li>
            );
          })}
        </ul>
        <p className="close" onClick={() => setClicked(false)}>
          Close
        </p>
      </>
    );
  } else if (clicked && comments.length == 0) {
    return (
      <>
        <p>Comments</p>
        <p>There are no comments on this post.</p>
        <p className="close" onClick={() => setClicked(false)}>
          Close
        </p>
      </>
    );
  } else {
    return (
      <p className="comments-title" onClick={() => setClicked(true)}>
        Comments ({comments.length})
      </p>
    );
  }
}

export { Comments };
