import { useEffect, useState } from "react";
import { UpdatePost } from "../api/ApiData";

export const DataUpdate = () => {
  const [postId, setPostId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const PutData = async () => {
    try {
      const res = await UpdatePost(postId, { title, body });
      console.log(res.data);
      setMessage('Post updated successfully!');
      setPostId(1);
      setTitle('');
      setBody('');

    } catch (error) {
      console.log('Error updating post:', error);
      setMessage('Error updating post.');
    }
  };

  const handleUpdate = () => {
    PutData();
  };

  useEffect(() => {}, []);

  return (
    <div className="update-container">
      <h1 className="update-heading">Update Post</h1>
      <div className="input-group">
        <label>Post ID:</label>
        <input
          type="number"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="textarea-field"
        />
      </div>
      <button className="update-button" onClick={handleUpdate}>Update Post</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};
