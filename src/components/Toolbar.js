import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = ({getPage}) => {
    return (
        <div className="toolbar">
            <h1>Recipe app</h1>
            <div className="toolbar-links">
                {getPage !== "/" && <Link className="links" to="/">Main</Link>}
                {getPage !== "createRecipePage" && <Link className="links" to="/createRecipePage">Create Recipe</Link>}
                {getPage !== "favoritesPage" && <Link className="links" to="/favoritesPage">Favorites</Link>}
            </div>
        </div>
    );
};

export default Toolbar;