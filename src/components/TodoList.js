import React from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';

const TodoList = ({ todos, deleteItem, toggleComplete }) => {
  return (
    <ListGroup className="mt-4">
      {todos.map((todo) => (
        <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Form.Check 
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="mr-2"
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
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
