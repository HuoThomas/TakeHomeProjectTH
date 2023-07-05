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
    <div className="container">
      <h1 className="m-t text-slab m-b display-4 text-600">
        Pitmaster Blueprints
        {' '}
        <span className="text-700 text-mute text-xl"
          >A place for lovers of smokey meats.
        </span>
      </h1>
      <hr />
      <div className="sg-section p-t-lg" id="sg-about">
        <div>
          <div className="pull-right" style={{position: 'relative',zIndex: '1000'}}>
            <Link to="/create" >
              <button className="btn btn-info">
                <i className="fas fa-plus"></i>
                Create Recipe
                </button>
              </Link>
            </div>
            <h2 className="sg-h2">Recipes</h2>
        </div>

        <div className="row">
          <div className="col-md-12">
            <ul className="list-items list-items-card">
              {recipes.map(recipe => (
          <li className="list-item list-item-hover list-icon">
          <i className="icon fas fa-utensils"></i>
          <Link to={`/detail/${recipe.id}`} style={{ textDecoration:'none'}}>
            <div className="link-block display-block">
              <b className="display-block link-block display-block-link"
                >{recipe.title}</b
              >
                      <span className="text-muted text-uc">{(recipe.creator || {}).name}</span>
            </div>
          </Link>
        </li>
        ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

Recipes.propTypes = {

};

export default Recipes;

