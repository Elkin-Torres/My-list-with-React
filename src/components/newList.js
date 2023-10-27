import React from "react";
import { BiXCircle, BiEditAlt } from "react-icons/bi";
import "../stylesheets/newList.css";

function NewList({text, id, completed, delTask, compTask, editTask}){
    return(
        <div className = "newList"
        id={ completed? "completed" : ""}>
            <p 
            className="newList__text"
            onClick={ () => compTask (id)}
            >
            {text}    
            </p> 
            <div className="newList_btns">
            <BiXCircle 
            onClick={ () => delTask(id)}
            />
            <BiEditAlt 
            onClick={ () => editTask(text)}
            />
            </div>
        </div>
    );
}

export default NewList;