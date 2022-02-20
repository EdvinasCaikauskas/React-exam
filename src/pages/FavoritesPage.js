import React, {useEffect} from 'react';
import Favorites from "../components/Favorites";

const FavoritesPage = ({favorites, setPage}) => {

    useEffect(() => {
        setPage('favoritesPage')
    }, [])

    return (
        <div className="recipes">
            {favorites.map((x, i) => <Favorites favorite={x} key={i}/>)}
        </div>
    );
};

export default FavoritesPage;