import  Axios  from "axios";

const api=Axios.create({
      baseURL:"https://jsonplaceholder.typicode.com",
});

export const Posts=()=>{
      return api.get("/posts");
};

export const PostComment=()=>{
      return api.get("posts/1/comments")
};

export const UpdatePost=(postId,updatedData)=>{
      return api.put(`/posts/${postId}`,updatedData);
};
