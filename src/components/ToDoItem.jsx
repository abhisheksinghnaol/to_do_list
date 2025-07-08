function ToDoItem({ todo, onDelete, onToggle }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition-colors p-3 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => onToggle(todo.id)}>
        {todo.completed && (
          <span className="text-green-500 text-xl">✔</span> //Check mark
        )}
        <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {todo.text}
        </span>
      </div>

      <button
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 active:scale-95 transition-transform"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;
