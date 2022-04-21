import React from 'react'

export const Todo = ({ todo,onDelete }) => {
 const deleteTodo=async ()=>{
   await fetch(`http://localhost:3000/todos/${todo.id}`,{
     method:"DELETE",
     headers:{"content-type":"application/json"},
   });
   onDelete(todo.id);
 };


  return (
    <div>
    <div>{todo.value}</div>
    <button onClick={deleteTodo}>Delete</button>
    </div>
  )
}
