import React from 'react';

const TodoList = ({ todos, onToggleComplete, onDelete }) => (
  <div>
    {todos.map((todo) => (
      <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <span onClick={() => onToggleComplete(todo.id)} className="custom-checkbox">
          {todo.completed && '✔'}
        </span>
        <span>{todo.text}</span>
        <div>
          <button onClick={() => onDelete(todo.id)} className="btn btn-danger">Delete</button>
        </div>
      </div>
    ))}
  </div>
);

export default TodoList;
