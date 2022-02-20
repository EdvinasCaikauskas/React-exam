import React from 'react';
import {useParams} from "react-router-dom";
import SingleRecipeView from "../components/SingleRecipeView";

const SingleRecipePage = ({recipes}) => {

    const {url} = useParams()

    const recipe = recipes.find(x => x.url === url)

    return (
        <div className="single-recipe-container">
            {recipes.map((x, i) => <SingleRecipeView recipes={recipe} item={x} key={i} index={i}/>)}
        </div>
    );
};

export default SingleRecipePage;