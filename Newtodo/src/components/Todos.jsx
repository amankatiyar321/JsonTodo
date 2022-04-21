import React, { useEffect, useState } from 'react'
import { Addtodo } from './Addtodo';
import { Todo } from './Todo';
export const Todos = () => {
  const [todos,setTodos]=useState([]);
  const onAdd=(newTodo)=>{
      setTodos([ ...todos,newTodo ]);
  };

  const onDelete=(id)=>{
    const newTodos=todos.filter((todo)=> todo.id !== id);
    setTodos(newTodos);
  }

  useEffect(()=>{
    const getTodo=async ()=>{
      try{
        let res=await fetch("http://localhost:3000/todos/");
        let data=await res.json();
        console.log(data);
        setTodos(data);
      }catch(e){
        console.log(e);
      }
    };
    getTodo();
  },[]);

  return (
    <div>
         <Addtodo onAdd={onAdd}/>
         {todos.map((todo)=>(
             <Todo key={todo.id} todo={todo}  onDelete={onDelete}/>
         ))}
    </div>
  );
};
