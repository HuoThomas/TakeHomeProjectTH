import React, { useState, useEffect } from 'react';
import { getRecipeById } from '../actions/recipe';

function Recipe(props) {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getRecipeById(props.match.params.recipeId)
      .then(res => setRecipe(res));
  }, [props.match.params.recipeId]);

  return (
    <div>
      <h1>
          <table className="table">
            <tr>
              <td>Id:</td>
              <td>{recipe.id}</td>
            </tr>
            <tr>
              <td>Title:</td>
              <td>{recipe.title}</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{recipe.description}</td>
            </tr>
            <tr>
              <td>Notes:</td>
              <td>{recipe.notes}</td>
            </tr>
            <tr>
              <td>Tags:</td>
              <td>{(recipe.tags || []).join() || ''}</td>
            </tr>
            <tr>
              <td>Creator:</td>
              <td>{(recipe.creator || {}).name || ''}</td>
            </tr>

          </table>
      </h1>
      
    </div>
  )
};

export default Recipe;

