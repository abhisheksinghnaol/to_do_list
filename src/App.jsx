import Header from './components/Header'
import './App.css'
import { useState } from 'react';
import ToDoList from './components/ToDoList';
function App() {
  const[todos,setToDos]=useState([]);
  const[input,setInput]=useState("");
  
  const addToDo=()=>{
    let task=input.trim();
    if(!task) return;
    const newToDo={
      id:Date.now(),
      text:task,
      completed:false,
    };
    setToDos([...todos,newToDo])
    setInput("")
  }


  const deleteToDo=(id)=>{
    setToDos(todos.filter(todo=>todo.id!=id));
  }

  const toggleComplete=(id)=>{
    setToDos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo));
  }

 
  return (
    <div className="min-h-screen bg-gradient-to-r from-stone-400 to-gray-500 flex items-center justify-">
      

    <div className="p-4 max-w-md mx-auto border border-slate-800 w-50 h-50 py-3 my-3 bg-slate-500" >
     <Header/>
     <div className='flex gap-2 my-4'>
      <input className='w-72 border'type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Add a task...'/>
       <button className='bg-blue-500 text-white px-4 py-2 border border-blue-600 hover:bg-sky-700' onClick={addToDo}>Add Task</button>
     </div>
     
     <ToDoList
      todos={todos} 
    
     onDelete={deleteToDo}
     onToggle={toggleComplete}
     
     />
    </div>
    </div>
  )
}

export default App







