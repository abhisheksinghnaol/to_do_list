import ToDoItem from "./ToDoItem.jsx"
function ToDoList({todos,onDelete,onToggle}){
    console.log("todos received in ToDoList:", todos);
    return(
        <div className="mt-6 space-y-2">
        {
            todos.map(todo=>(
                <ToDoItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onToggle={onToggle}

                
                />
            ))
        }
        
        </div>
    )
}
export default ToDoList;




