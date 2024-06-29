import React from 'react';
import { ListGroup, Button, Form, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({ todos, deleteItem, toggleComplete, darkMode, showTodo, showDone }) => {
  return (
    <Container className={`todo-list mt-4 ${darkMode ? 'bg-dark text-white' : ''}`}>
      <Row>
        {todos.map((todo, index) => {
          let colClass = "col-12"; 

          if (todos.length === 2) {
            colClass = "col-md-6"; 
          } else if (todos.length === 3) {
            colClass = index < 2 ? "col-md-6" : "col-12"; 
          } else if (todos.length >= 4) {
            colClass = "col-md-6"; 
          }

          const itemClass = todo.completed
            ? 'completed-item'
            : (!showTodo && !showDone)
            ? 'uncompleted-item'
            : showTodo && !todo.completed
            ? 'uncompleted-item'
            : showDone && todo.completed
            ? 'completed-item'
            : '';

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
                    className="me-3 custom-checkbox"
                    style={{ transform: 'scale(1.5)' }} 
                  />
                  <span className={itemClass}>
                    {todo.text}
                  </span>
                </div>
                <Button
                  variant="link"
                  onClick={() => deleteItem(todo.id)}
                  className="p-0 text-danger"
                >
                  <FontAwesomeIcon icon={faTimes} size="lg" /> {/* Use FontAwesome X icon */}
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
