import React, {useEffect} from 'react';
import SingleRecipe from "../components/SingleRecipe";

const MainPage = ({recipes, setPage}) => {

    useEffect(() => {
        setPage('/')
    }, [])

    return (
        <div className="recipes-container-main">
            {recipes.map((x, i) => <SingleRecipe item={x} key={i}/>)}
        </div>
    );
};

export default MainPage;