import React from 'react';
import   { useState } from 'react';
export const Addtodo = ({ onAdd }) => {
    const [newTodo,setNewtodo]=useState("");

    const postTodo = async(value)=>{
      let res=await fetch("http://localhost:3000/todos/",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
          value,
          completed:false,
        }),
      });
      let data =await res.json();
      onAdd(data);
    }
  return (
    <div>
        <input type="text"
        value={newTodo}
        onChange={(e)=>setNewtodo(e.target.value)} placeholder="Write todos"/>
        <button onClick={()=>{
          let value=newTodo.trim();
            if(value){
               postTodo(value);
                setNewtodo("");
            }
        }}>Add Todo</button>
    </div>
  )
}
