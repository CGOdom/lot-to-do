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

const TodoList = ({ todos, onToggleComplete, onDelete }) => (
  <div>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onToggleComplete={onToggleComplete} onDelete={onDelete} />
    ))}
  </div>
);

export default TodoList;
