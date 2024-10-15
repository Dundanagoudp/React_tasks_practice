import  Axios  from "axios";


const api=Axios.create({
      baseURL:"https://pokeapi.co",
});


export const PokemonData=()=>{
      return  api.get("/api/v2/pokemon?limit=20");
};