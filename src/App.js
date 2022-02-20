import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import mainContext from "./context/mainContext";
import MainPage from "./pages/MainPage";
import SingleRecipePage from "./pages/SingleRecipePage";
import CreateRecipePage from "./pages/CreateRecipePage";
import FavoritesPage from "./pages/FavoritesPage";
import Toolbar from "./components/Toolbar";
import {useState} from "react";

function App() {

    const [getPage, setPage] = useState("")
    const [getRecipe, setRecipe] = useState([])
    const [getFavorites, setFavorites] = useState([])

    return (
        <div className="App">
            <mainContext.Provider value={{getRecipe, setRecipe, getFavorites, setFavorites}}>
                <BrowserRouter>
                    <Toolbar getPage={getPage}/>
                    <Routes>
                        <Route path="/" element={<MainPage recipes={getRecipe} setPage={setPage}/>}/>
                        <Route path="/singleRecipe/:url" element={<SingleRecipePage recipes={getRecipe}/>}/>
                        <Route path="/createRecipePage" element={<CreateRecipePage setPage={setPage}/>}/>
                        <Route path="/favoritesPage" element={<FavoritesPage setPage={setPage} favorites={getFavorites}/>}/>
                    </Routes>
                </BrowserRouter>
            </mainContext.Provider>


        </div>
    );
}

export default App;
