import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAllRecipes, putRecipe, getRecipeById, postRecipe } from '../actions/recipe';

function Edit(props) {
    const [recipe, setRecipe] = useState({
        title: "",
        description: "",
        notes: "",
        directions: [""],
        tags: [],
        creator: {
            name: "",
            email: "",
            userId: "1",
        }
    });
    const { id } = useParams();

    const onDirectionChange = (event, index) => {
        const currentDirections = [...recipe.directions];
        currentDirections[index] = event.currentTarget.value;
        setRecipe({
            ...recipe,
            directions: [
                ...currentDirections
            ]
        })
    }

    const onDirectionDelete = (oldDirections, index) => {
        let newDirections = [...recipe.directions];
        newDirections.splice(index, 1);
        setRecipe({
            ...recipe,
            directions: [
                ...newDirections
            ]
        })
    }

    const submissionHandler = (id, recipe) => {
        if(id === "create"){
            postRecipe(recipe).then(
                window.location.assign("/")
            )
        }
        else{
            putRecipe(id, recipe).then(
                window.location.assign("/detail/" + id + "?submitted=true")
            )
        }
    }   

    useEffect(() => {
        if(id !== "create"){
        getRecipeById(id)
            .then(res => setRecipe(res));
        }
        else{
            console.log("No change");
        }
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

            <div className="row p-t-lg">
                <div className="col-md-12">
                    <h2 className="sg-h2">Edit Recipe</h2>
                    <form className="m-b-lg" id="editForm">
                        <fieldset className="form-group">
                            <label htmlor="formGroupExampleInput" className="text-600">Title</label>
                            <input
                                onChange={e => setRecipe({
                                    ...recipe,
                                    title: e.currentTarget.value
                                })}
                                value={recipe.title}
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Recipe Title"
                            />
                        </fieldset>

                        <fieldset className="form-group">
                            <label htmlFor="formGroupExampleInput" className="text-600"
                            >Description</label>
                            <textarea
                                onChange={e => setRecipe({
                                    ...recipe,
                                    description: e.currentTarget.value
                                })}
                                value={recipe.description}
                                rows="3"
                                className="form-control"
                                id="formGroupExampleInput"
                            ></textarea>
                        </fieldset>

                        <div className="flex-row m-b">
                            <div className="form-group flex-row-item">
                                <label className="text-sm text-600 m-b-xs">Creator Name</label>
                                <input
                                    onChange={e => setRecipe({
                                        ...recipe,
                                        creator: {
                                            ...recipe.creator,
                                            name: e.currentTarget.value
                                        }
                                    })}
                                    className="form-control" type="text"
                                    value={(recipe.creator || {}).name} />
                            </div>
                            <div className="form-group flex-row-item">
                                <label className="text-sm text-600 m-b-xs">Creator Email</label>
                                <input
                                    onChange={e => setRecipe({
                                        ...recipe,
                                        creator: {
                                            ...recipe.creator,
                                            email: e.currentTarget.value
                                        }
                                    })}
                                    className="form-control" type="text"
                                    value={(recipe.creator || {}).email} />
                            </div>
                        </div>

                        <fieldset className="form-group">
                            <label htmlFor="formGroupExampleInput" className="text-600"
                            >Directions</label>
                            <ol id="directionList">
                                {(recipe.directions || []).map((step, i) => (
                                    <li key={i}>
                                        <input
                                            onChange={e => onDirectionChange(e, i)}
                                            className="form-control"
                                            type="text"
                                            style={{ width: "98%", display: "inline" }}
                                            placeholder="Enter Step"
                                            value={step}
                                        />
                                        <a onClick={e => onDirectionDelete(e, i)}
                                            className="trashMe">{' '}
                                            <i className="fas fa-trash-alt"></i>
                                        </a>
                                    </li>
                                ))}
                            </ol>
                            <div style={{ paddingLeft: "1.25rem" }}>
                                <a onClick={e => setRecipe({
                                    ...recipe,
                                    directions: [...recipe.directions, ""]
                                })}
                                    className="btn btn-info" id="addStep">Add Step</a>
                            </div>
                        </fieldset>

                        <fieldset className="form-group">
                            <label htmlFor="formGroupExampleInput" className="text-600">Tags</label>
                            <input
                                onChange={e => setRecipe({
                                    ...recipe,
                                    tags: e.currentTarget.value.split(", ")
                                })}
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="e.g. ribs, pork, bbq"
                                value={recipe.tags.join(", ")}
                            />
                            <small className="text-muted"
                            >Enter comma separated list of tags</small
                            >
                        </fieldset>
                        <div className="pull-right m-b-lg">
                            <input onClick={() => submissionHandler(id, recipe)}
                                type="button" value="Submit" className="btn btn-info" />
                        </div>
                        <div className="pull-right m-b-lg">
                            <Link to="/" className="btn btn-link">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit;