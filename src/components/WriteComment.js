import React from 'react';
import {useRef} from "react";

const WriteComment = ({getRecipe, setRecipe, index}) => {

    const commentRef = useRef()

    function commentRecipe() {
        const comment = {
            text: commentRef.current.value
        }
        getRecipe[index].comments.push(comment)
        setRecipe([...getRecipe])
    }

    return (
        <div className="d-flex gap5 center comment">

            <input ref={commentRef} type="text"/>
            <button onClick={commentRecipe}>Comment</button>

        </div>
    );
};

export default WriteComment;