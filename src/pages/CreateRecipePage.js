import React, {useEffect} from 'react';
import CreateRecipe from "../components/CreateRecipe";

const CreateRecipePage = ({setPage}) => {

    useEffect(() => {
        setPage('createRecipePage')
    }, [])

    return (
        <div className="center">
            <CreateRecipe/>
        </div>
    );
};

export default CreateRecipePage;