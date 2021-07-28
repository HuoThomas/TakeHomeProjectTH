import axios from 'axios';

export async function getAllRecipes() {
  const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/recipes`);
  return result.data.data;
}

export async function getRecipeById(id) {
  const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/recipes/${id}`);
  return result.data.data;
}