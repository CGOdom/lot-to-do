import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TodoList = ({ todos, deleteItem }) => {
  return (
    <ListGroup className="mt-4">
      {todos.map((todo) => (
        <ListGroup.Item key={todo.id}>
          {todo.text}
          <Button
            variant="danger"
            onClick={() => deleteItem(todo.id)}
            className="float-right"
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;
