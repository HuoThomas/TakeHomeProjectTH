import axios from 'axios';

export async function getAllRecipes() {
  const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/recipes`);
  return result.data.data;
}

export async function getRecipeById(id) {
  const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/recipes/${id}`);
  return result.data.data;
}

export async function postRecipe(body){
  return await axios.post("http://localhost:3000/recipes", body);
}

export async function putRecipe(id, body) {
  return await axios.put(`http://localhost:3000/recipes/${id}`, body);
}