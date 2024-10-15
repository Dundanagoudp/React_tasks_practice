import { useEffect, useState } from "react";
import { Posts } from "../api/ApiData";

export const PostData = () => {
  const [posts, setPosts] = useState([]);

  const fetchPostData = async () => {
    try {
      const res = await Posts();
      setPosts(res.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

//  fetch method 
// const fetchPostData=async()=>{
//       try {
//             const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//             if(!res.ok){
//                   throw new Error("Network response was not ok");
//             }
//             console.log(res.data);
//       } catch (error) {
            
//       }
// }

  useEffect(() => {
    fetchPostData();
  }, []);




  return (
    <div className="main-container">
      <h1>Posts Data</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
