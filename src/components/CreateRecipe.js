import React from 'react';
import {useRef} from "react";
import mainContext from "../context/mainContext";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const CreateRecipe = () => {

    const {getRecipe, setRecipe} = useContext(mainContext)

    const nav = useNavigate()

    const [getImageList, setImageList] = useState([{image: ""}]);
    const [getIngredientsList, setIngredientsList] = useState([{ingredients: ""}]);
    const [getPrepStepsList, setPrepStepsList] = useState([{prepSteps: ""}]);

    const handleImageChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...getImageList];
        list[index][name] = value;
        setImageList(list);
    };

    const handleImageRemove = (index) => {
        const list = [...getImageList];
        list.splice(index, 1);
        setImageList(list);
    };

    const handleImageAdd = () => {
        setImageList([...getImageList, {image: ""}]);
    };

    const handleIngredientsChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...getIngredientsList];
        list[index][name] = value;
        setIngredientsList(list);
    };

    const handleIngredientsRemove = (index) => {
        const list = [...getIngredientsList];
        list.splice(index, 1);
        setIngredientsList(list);
    };

    const handleIngredientsAdd = () => {
        setIngredientsList([...getIngredientsList, {ingredients: ""}]);
    };

    const handlePrepStepsChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...getPrepStepsList];
        list[index][name] = value;
        setPrepStepsList(list);
    };

    const handlePrepStepsRemove = (index) => {
        const list = [...getPrepStepsList];
        list.splice(index, 1);
        setPrepStepsList(list);
    };

    const handlePrepStepsAdd = () => {
        setPrepStepsList([...getPrepStepsList, {image: ""}]);
    };

    const title = useRef()
    const prepTime = useRef()



    function createRecipe() {
        const recipe = {
            image: [getImageList],
            title: title.current.value,
            url: title.current.value.replace(/ /g, "-"),
            ingredients: [getIngredientsList],
            prepTime: prepTime.current.value,
            prepSteps: [getPrepStepsList],
            comments: [],
        }
        setRecipe([...getRecipe, recipe])
        nav("/")
    }

    return (
        <div>
            <div className="create-recipe-container">

                {getImageList.map((singleService, index) => (
                    <div className="add-image" key={index}>
                        <input
                            name="image"
                            type="text"
                            placeholder="Image"
                            value={singleService.service}
                            onChange={(e) => handleImageChange(e, index)}
                            required
                        />
                        {getImageList.length - 1 === index && getImageList.length < 3 && (
                            <button onClick={handleImageAdd}>Add Image</button>
                        )}
                            {getImageList.length !== 1 && (
                                <button onClick={() => handleImageRemove(index)}>Remove Image</button>
                            )}


                    </div>
                ))}

                <input type="text" ref={title} placeholder="Title"/>

                {getIngredientsList.map((singleService, index) => (
                    <div className="add-image" key={index}>
                        <input
                            name="ingredients"
                            type="text"
                            placeholder="Ingredient"
                            value={singleService.service}
                            onChange={(e) => handleIngredientsChange(e, index)}
                            required
                        />
                        {getIngredientsList.length - 1 === index && getIngredientsList.length < 12 && (
                            <button onClick={handleIngredientsAdd}>Add Ingredient</button>
                        )}
                        {getIngredientsList.length !== 1 && (
                            <button onClick={() => handleIngredientsRemove(index)}>Remove Ingredient</button>
                        )}


                    </div>
                ))}

                <input type="text" ref={prepTime} placeholder="Preparation time"/>

                {getPrepStepsList.map((singleService, index) => (
                    <div className="add-image" key={index}>
                        <input
                            name="prepSteps"
                            type="text"
                            placeholder="Preparation step"
                            value={singleService.service}
                            onChange={(e) => handlePrepStepsChange(e, index)}
                            required
                        />
                        {getPrepStepsList.length - 1 === index && getPrepStepsList.length < 10 && (
                            <button onClick={handlePrepStepsAdd}>Add Preparation</button>
                        )}
                        {getPrepStepsList.length !== 1 && (
                            <button onClick={() => handlePrepStepsRemove(index)}>Remove Preparation</button>
                        )}


                    </div>
                ))}

                <button onClick={createRecipe}>Create Recipe</button>
            </div>


        </div>
    );
};

export default CreateRecipe;