import React from "react";
import "../stylesheets/inputList.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function InputList(props){

    const [task, setTask] = useState();

    //save the information that is writing
    const writtingTask = e =>{
        let info = e.target.value;
        setTask(info);
    }
    //The object is assembled and sent with the form
    const sendingTask = e =>{
        e.preventDefault();
        const objList = {
            id:uuidv4(),
            text: task,
            completed: false
        }

        props.onSubmit(objList);
    }

return (
    <>
<form className="form" onSubmit={sendingTask}>
<input className="form__input"
type="text"
placeholder="Write a task..." 
onChange={writtingTask}
/>
<button className="form__btn">
    Add Task
</button>
</form>
<p className='form__note'>Note: click on the item to cross it out</p>
    </>
    
);
}

export default InputList;