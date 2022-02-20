import React from 'react';
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import mainContext from "../context/mainContext";

const SingleRecipe = ({item}) => {

    const {getFavorites, setFavorites} = useContext(mainContext)

    const nav = useNavigate()

    function openRecipe() {
        nav("/singleRecipe/"+item.url)
    }

    function addToFavorites() {
        const recipe = getFavorites.find(x => x.url === item.url)
        if(recipe) {
        }
        else {
            setFavorites([...getFavorites, item])
        }
    }

    return (
        <div className="recipes">
            <div className="recipe-card">
                <img src={item.image[0][0].image} alt=""/>
                <div><strong>Title:</strong> {item.title}</div>
                <div><strong>Ingredients:</strong> {item.ingredients[0].length}</div>
                <div><strong>Preparation time:</strong> {item.prepTime}</div>
                <div><strong>Preparation:</strong> {item.prepSteps[0].length} steps</div>
                <div><strong>Reviews:</strong> {item.comments.length}</div>
                <button onClick={addToFavorites}>Add to favorites</button>
                <button onClick={openRecipe}>Open recipe</button>
            </div>

        </div>
    );
};

export default SingleRecipe;