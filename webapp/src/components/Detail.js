import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAllRecipes, getRecipeById } from '../actions/recipe';
import moment from 'moment';

function Detail(props) {
  const [currentRecipe, setCurrentRecipe] = useState({});
  const { id } = useParams();
  let success = false;
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  success = params.submitted;

  useEffect(() => {
    getRecipeById(id)
      .then(res => setCurrentRecipe(res));
    // const idGetter = getRecipeById(id);
    // idGetter.then(function(trueID) {
    //   console.log(trueID);
    //   setCurrentRecipe(trueID);
    // })
  }, []);

  return (
    <div className="container">
      <h1 className="m-t text-slab m-b display-4 text-600">
        Pitmaster Blueprints
        {' '}
        <span className="text-700 text-mute text-xl"
          >A place for lovers of smokey meats.</span
        >
      </h1>
      <hr />
      <div className={`alert alert-success ${success ? "" : "display-none"}`} id="success">
        Recipe Successfully Updated!
      </div>
      <Link to="/" className="btn btn-link">
        <i className="fas fa-long-arrow-alt-left"></i>
        Back to all Recipes
      </Link>
      
      <div className="row p-t-lg">
        <div className="col-md-12">
          <div className="media m-b m-md-b-0">
            <div className="media-left">
              <div
                className="circle-outline circle-outline-lg display-1 text-muted"
              >
                <i className="icon fas fa-utensils"></i>
              </div>
            </div>
            <div className="media-body">
              <h1 className="display-2 text-600 m-b-xs">
                {currentRecipe.title}
              </h1>
              {/* Ask about this syntax */}
              <b className="text-muted text-uc text-sm">{(currentRecipe.creator || {}).name}</b>
              <span className="text-pipe text-xs">|</span>
              <span className="text-mute text-xs">{(currentRecipe.creator || {}).email}</span>
              <span className="text-pipe text-xs">|</span>
              <span className="text-mute text-xs">{moment(currentRecipe.createdAt).format("[Updated] MMM D, YYYY")}</span>
              <div>
                {/* Why does this work? */}
                {(currentRecipe.tags || []).map(ingredients => (
                  <span className="label label-gray m-r-sm">{ingredients}</span>
                ))}
              </div>
            </div>
            <div className="pull-right">
              <Link to={`/edit/${id}`} className="btn btn-info">
                <i className="fas fa-edit"></i>
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row p-t-lg">
        <div className="col-md-12">
          <h2>Description</h2>
          <p className="text-md m-b-0">
            {currentRecipe.description}
          </p>
        </div>
      </div>

      <div className="row p-t-lg">
        <div className="col-md-12">
          <h2>Directions</h2>
            <span className="text-md m-b-0">
              <ol>
                {currentRecipe.directions && currentRecipe.directions.map(steps => (
                  <li>{steps}</li>
                ))}
              </ol>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Detail;