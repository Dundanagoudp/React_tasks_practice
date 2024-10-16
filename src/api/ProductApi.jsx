import  Axios  from "axios";

const api=Axios.create({
      baseURL:"https://fakestoreapi.com",
});

export const ProductData=()=>{
      return api.get("/products");
};