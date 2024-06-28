import React from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';

const TodoList = ({ todos, deleteItem, toggleComplete }) => {
  return (
    <ListGroup className="todo-list mt-4">
      {todos.map((todo) => (
        <ListGroup.Item key={todo.id} className="todo-item d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center">
            <Form.Check 
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="custom-checkbox me-3"
            />
            <span className="todo-text" style={{ flex: 1 }}>
              {todo.text}
            </span>
          </div>
          <Button
            variant="danger"
            onClick={() => deleteItem(todo.id)}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;
