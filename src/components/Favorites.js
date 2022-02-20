import React, {useContext} from 'react';
import mainContext from "../context/mainContext";

const Favorites = ({favorite}) => {

    const {getRecipe, setRecipe, getFavorites, setFavorites} = useContext(mainContext)

    const removeFromFavorites = (index) => {
            const list = [...getFavorites];
            list.splice(index, 1);
            setFavorites(list);
        };

    return (
        <div className="recipes">
            <div className="recipe-card">
                <img src={favorite.image[0][0].image} alt=""/>
                <div><strong>Title:</strong> {favorite.title}</div>
                <div><strong>Ingredients:</strong> {favorite.ingredients[0].length}</div>
                <div><strong>Preparation time:</strong> {favorite.prepTime}</div>
                <div><strong>Preparation:</strong> {favorite.prepSteps[0].length} steps</div>
                <div><strong>Reviews:</strong> {favorite.comments.length}</div>
                <button onClick={removeFromFavorites}>Remove from favorites</button>
            </div>
        </div>
    );
};

export default Favorites;