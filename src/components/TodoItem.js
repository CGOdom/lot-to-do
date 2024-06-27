import React from 'react';

const TodoItem = ({ todo, onToggleComplete, onDelete }) => (
  <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
    <span className="custom-checkbox" onClick={() => onToggleComplete(todo.id)} />
    <span className="todo-text">{todo.text}</span>
    <div>
      <button onClick={() => onDelete(todo.id)} className="btn btn-danger">Delete</button>
    </div>
  </div>
);

export default TodoItem;
