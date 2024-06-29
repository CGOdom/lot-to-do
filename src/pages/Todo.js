import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container, Form, Card, Row, Col, Button } from 'react-bootstrap';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import './Todo.css';

const Todo = ({ darkMode }) => {
  const [todos, setTodos] = useState(getInitialState());
  const [showTodo, setShowTodo] = useState(true);
  const [showDone, setShowDone] = useState(true);
  const [hasCompletedItems, setHasCompletedItems] = useState(false);
  const [hasUncompletedItems, setHasUncompletedItems] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setHasCompletedItems(todos.some(todo => todo.completed));
    setHasUncompletedItems(todos.some(todo => !todo.completed));
  }, [todos]);

  useEffect(() => {
    document.body.classList.add('bg-dark');
    return () => {
      document.body.classList.remove('bg-dark');
    };
  }, []);

  function getInitialState() {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  }

  const addItem = (text) => {
    setShowTodo(true);
    setShowDone(true);
    setTodos([{ id: nanoid(), text, completed: false }, ...todos]);
  };

  const deleteItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const clearCompletedItems = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const handleToggleTodo = () => {
    setShowTodo(prev => {
      const newState = !prev;
      if (!newState && !showDone) {
        setShowDone(true);
      }
      return newState;
    });
  };

  const handleToggleDone = () => {
    setShowDone(prev => {
      const newState = !prev;
      if (!newState && !showTodo) {
        setShowTodo(true);
      }
      return newState;
    });
  };

  const filteredTodos = todos.filter(todo => {
    if (!showTodo && !todo.completed) return false;
    if (!showDone && todo.completed) return false;
    return true;
  });

  useEffect(() => {
    if (hasUncompletedItems && !hasCompletedItems) {
      setShowTodo(true);
      setShowDone(false);
    } else if (hasCompletedItems && !hasUncompletedItems) {
      setShowTodo(false);
      setShowDone(true);
    } else {
      setShowTodo(true);
      setShowDone(true);
    }
  }, [hasCompletedItems, hasUncompletedItems]);

  return (
    <Container fluid className={`pt-3 ${darkMode ? 'bg-dark text-white' : ''}`}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className={`p-4 shadow-sm ${darkMode ? 'bg-dark text-white' : ''}`}>
            <Card.Body>
              <TodoForm addItem={addItem} />
              {hasCompletedItems && hasUncompletedItems && (
                <Form className="mt-0">
                  <Row className="justify-content-center">
                    <Col xs={6} className="text-center">
                      <Button
                        variant={showTodo ? 'success' : 'secondary'}
                        onClick={handleToggleTodo}
                        className="toggle-btn w-100"
                      >
                        To-Do
                      </Button>
                    </Col>
                    <Col xs={6} className="text-center">
                      <Button
                        variant={showDone ? 'primary' : 'secondary'}
                        onClick={handleToggleDone}
                        className="toggle-btn w-100"
                      >
                        Completed
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
              {(!showTodo && hasCompletedItems) && (
                <Row className="justify-content-center mt-3">
                  <Col xs={12} className="text-center">
                    <Button
                      variant="danger"
                      onClick={clearCompletedItems}
                      className="w-100"
                    >
                      Clear Completed List
                    </Button>
                  </Col>
                </Row>
              )}
              <TodoList
                todos={filteredTodos}
                deleteItem={deleteItem}
                toggleComplete={toggleComplete}
                darkMode={darkMode}
                showTodo={showTodo}
                showDone={showDone}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;
