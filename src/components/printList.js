import React from "react";
import NewList from "./newList.js";
import InputList from "./InputList.js";
import { useState, useEffect } from "react";
import "../stylesheets/printList.css";

function PrintList(){

    let test = document.querySelector(".list__container"),
        circles = document.querySelector(".list__circles"),
        listTask = document.querySelector(".list");

    const [list , setList] = useState([]);
    const [size, setSize] = useState([]);

    useEffect(()=>{
        if(listTask){
            testing();
        }
    },[list]);

    //Adjust the height of the background animation when tasks are added or removed from the list and exceed the default screen height
    const testing = () =>{
        //save the screen size as the list grows
        let addSize = [listTask.clientHeight,...size];
        setSize(addSize);
        //128 refers to the margin that "list__container" has
        if((test.clientHeight + 128) > size[size.length-1]){
            circles.style.height = `${test.clientHeight + 128}px`;
        };
        //adjust the size of the animation when deleting items from the list
        if(((test.clientHeight + 128) < size[size.length-1]) && (circles.clientHeight > size[size.length-1])){
            circles.style.height = `${size[size.length-1]}px`;
        };
    }

    //registered information is saved
    const arrList = inf => {    
        if (!inf.text){
            setList(list);
        } else if(inf.text.trim()){
            const addingList = [inf,...list];
            setList(addingList);
        }
    }

    //The selected item is crossed out
    const compTask = id =>{
        const newArr = list.map( task =>{
            if( task.id === id){
                task.completed = !task.completed;
            }
            return task;
        }
        )
        setList(newArr);  
    }

    //the selected item is deleted
    const delTask = id =>{
        const newArr = list.filter(task => task.id !== id);
        setList(newArr);
    }
    //allows generating the text change in the task
    const editing = id =>{
        const newArr = list.map(task =>{
            if(task.id === id){
                task.edit = !task.edit;
            }
            return task;
        })
        setList(newArr);
    }

    //Change the text that had been typed and disable the option to edit the text again
    const sendNewText =(id, newText)=>{
        const newArr = list.map(task =>{
            if(task.id === id){
                task.text = newText;
                task.edit = !task.edit;
            }
            return task;
        })
        setList(newArr);
    }

    return(
        <>
        <InputList onSubmit = {arrList} />
        <div className="printList">
            {list.map( item =>
                <NewList
                key={item.id}
                text={item.text}
                id={item.id}
                completed={item.completed}
                compTask={compTask}
                delTask={delTask} 
                editTask={editing}
                edit={item.edit}
                sendingNewText={sendNewText}
                />            
            )}
        </div>
        </>
    );
}

export default PrintList;