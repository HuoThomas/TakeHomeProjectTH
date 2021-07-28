import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAllRecipes } from '../actions/recipe';

function Recipes(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes()
      .then(res => setRecipes(res));
  }, []);

  return (
    <div>
      <h1>RECIPES</h1>
      <ul>
        {recipes.map(recipe => (
          <li>
            <Link to={`/recipes/${recipe.id}`}>
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
      
    </div>
  )
};

Recipes.propTypes = {

};

export default Recipes;

