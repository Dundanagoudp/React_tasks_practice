import { useEffect, useState } from "react";
import { PostComment } from "../api/ApiData";

export const PostComments = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => { 
    try {
      const res = await PostComment();
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="container">
      {comments.map((comment) => (
        <div className="comment-card" key={comment.id}>
          <h2>{comment.name}</h2>
          <p>Email: {comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};
