import React, { useState } from "react";
import List from "./List";

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [arr, SetArr] = useState([]);
  
console.log(arr)
    const get = (event)=>{
      setTodo(event.target.value);
      // console.log(event.target.value);
    }


    const add = ()=>{
      SetArr([todo,...arr]);
      setTodo("");
  }

  const reset =()=>{
    SetArr([])
  }

return (<>
        <input type="text" placeholder="Type here" value={todo}  onChange={get}  />
        <input type="button" value="Add" onClick={add}   />
        <input type="button" value="Rest" onClick={reset}   />

        <List arr={arr}/>
      </>
  );};


export default Todo;