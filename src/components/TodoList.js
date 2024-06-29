import React from 'react';
import { ListGroup, Button, Form, Container, Row, Col } from 'react-bootstrap';

const TodoList = ({ todos, deleteItem, toggleComplete }) => {
  return (
    <Container className="todo-list mt-4">
      <Row>
        {todos.map((todo, index) => {
          let colClass = "col-12"; // Default to full width

          if (todos.length === 2) {
            colClass = "col-md-6"; // Two items, half width each on medium and larger screens
          } else if (todos.length === 3) {
            colClass = index < 2 ? "col-md-6" : "col-12"; // First two items half width, last item full width
          } else if (todos.length >= 4) {
            colClass = "col-md-6"; // Four or more items, each item half width on medium and larger screens
          }

          return (
            <Col key={todo.id} className={colClass}>
              <ListGroup.Item className="d-flex justify-content-between align-items-center py-3">
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
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default TodoList;
