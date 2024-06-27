import React from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';

const TodoItem = ({ todo, deleteItem, toggleComplete }) => (
  <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
    <span className="custom-checkbox" onClick={() => toggleComplete(todo.id)} />
    <span className="todo-text">{todo.text}</span>
    <Button variant="danger" onClick={() => deleteItem(todo.id)}>Delete</Button>
  </div>
);

const TodoList = ({ todos, deleteItem, toggleComplete }) => (
  <div className="todo-list">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem} toggleComplete={toggleComplete} />
    ))}
  </div>
);

export default TodoList;
