import React from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';

const TodoList = ({ todos, deleteItem, toggleComplete }) => {
  return (
    <ListGroup className="mt-4">
      {todos.map((todo) => (
        <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center">
            <Form.Check 
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="me-3"
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: 1 }}>
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
