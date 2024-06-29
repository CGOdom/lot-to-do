import React from 'react';
import { ListGroup, Button, Form, Container, Row, Col } from 'react-bootstrap';
import { XCircleFill } from 'react-bootstrap-icons';

const TodoList = ({ todos, deleteItem, toggleComplete, darkMode, showTodo, showDone }) => {
  return (
    <Container className={`todo-list mt-4 ${darkMode ? 'bg-dark text-white' : ''}`}>
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

          const textStyle = {
            color: showTodo && !todo.completed ? 'green' : showDone && todo.completed ? '' : darkMode ? 'white' : 'black',
            textDecoration: todo.completed ? 'line-through' : 'none',
            flex: 1
          };

          const textClass = showDone && todo.completed ? 'text-primary' : '';

          return (
            <Col key={todo.id} className={colClass}>
              <ListGroup.Item
                className={`d-flex justify-content-between align-items-center py-3 ${
                  darkMode ? 'bg-dark text-white' : ''
                }`}
              >
                <div className="d-flex align-items-center">
                  <Form.Check
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="me-3"
                    style={{ transform: 'scale(1.5)' }} // Increase checkbox size
                  />
                  <span className={textClass} style={textStyle}>
                    {todo.text}
                  </span>
                </div>
                <Button
                  variant="link"
                  onClick={() => deleteItem(todo.id)}
                  className="p-0 text-danger"
                >
                  <XCircleFill size={20} /> {/* Decreased size of the X icon */}
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
