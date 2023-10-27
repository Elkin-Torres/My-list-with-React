import {React, useState} from "react";
import { BiXCircle, BiEditAlt, BiCheck } from "react-icons/bi";
import "../stylesheets/newList.css";

function NewList({text, id, completed, delTask, compTask, editTask,edit, sendingNewText}){

    const [newText , setText] = useState(text);

    //controls the entry of the text being edited
    function addNewText(e){
        setText(e.target.value);
    }

    return(
        <>
        {edit ? 
              <form className = "newList">
                  <input onChange={addNewText}
                  value={newText}
                  className="newList__text"
                  /> 
                  <div className="newList_btns">
                    <BiCheck onClick={ () => sendingNewText(id, newText)}/>
                  </div>
              </form>
              : 
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
                  onClick={ () => editTask(id)}
                  />
                  </div>
              </div>
              }
  
        </>

    );
}

export default NewList;