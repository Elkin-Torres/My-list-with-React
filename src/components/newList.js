import React from "react";
import { BiXCircle } from "react-icons/bi";
import "../stylesheets/newList.css";

function NewList({text, id, completed, delTask, compTask}){
    return(
        <div className = "newList"
        id={ completed? "completed" : ""}>
            <p 
            className="newList__text"
            onClick={ () => compTask (id)}
            >
            {text}    
            </p> 
            <BiXCircle 
            className="newList__img"
            onClick={ () => delTask(id)}
            />
        </div>
    );
}

export default NewList;