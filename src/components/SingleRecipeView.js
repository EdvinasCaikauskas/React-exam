import React, {useContext, useState} from 'react';
import mainContext from "../context/mainContext";
import WriteComment from "./WriteComment";

const SingleRecipeView = ({recipes, item, index}) => {

    const {getFavorites, setFavorites, getRecipe, setRecipe} = useContext(mainContext)


    function addToFavorites() {
        const recipe = getFavorites.find(x => x.url === item.url)

        if (recipe) {
        } else {
            setFavorites([...getFavorites, item])
        }
    }

    return (
        <div className="single-recipe">
            <div className="spacing">
                <img src={recipes.image[0][0].image} alt=""/>
                <div><strong>Title:</strong> {recipes.title}</div>
                <div><strong>Preparation time:</strong> {recipes.prepTime}</div>
                <button onClick={addToFavorites}>Add to favorites</button>
                <div className="auto">
                    <WriteComment getRecipe={getRecipe} setRecipe={setRecipe} index={index}/>
                    {recipes.comments.map((x, i) => <div key={i}>
                        <div>{x.text}</div>
                    </div>)}
                </div>

            </div>


            <div className="d-flex ingredients">
                <div className="ml50"><strong>Ingredients:</strong> {recipes.ingredients[0].map((x, i) => (
                    <ul key={i}>
                        <li>{x.ingredients}</li>
                    </ul>))} </div>

                <div className="ml50"><strong>Preparation:</strong> {recipes.prepSteps[0].map((x, i) => (
                    <ul key={i}>
                        <li>{x.prepSteps}</li>
                    </ul>
                ))} </div>
            </div>


        </div>
    );
};

export default SingleRecipeView;