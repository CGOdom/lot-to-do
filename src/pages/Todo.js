import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container, Form, Card, Row, Col, Button } from 'react-bootstrap';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import './Todo.css';

const Todo = ({ darkMode }) => {
  const getInitialState = () => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  const [todos, setTodos] = useState(getInitialState());
  const [showTodo, setShowTodo] = useState(false);
  const [showDone, setShowDone] = useState(false);
  const [hasCompletedItems, setHasCompletedItems] = useState(false);
  const [hasUncompletedItems, setHasUncompletedItems] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    updateItemStates(todos);
  }, [todos]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark');
    } else {
      document.body.classList.remove('bg-dark');
    }
  }, [darkMode]);

  const addItem = (text) => {
    const newTodos = [{ id: nanoid(), text, completed: false }, ...todos];
    setTodos(newTodos);
  };

  const deleteItem = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
    updateItemStates(updatedTodos);
  };

  const clearCompletedItems = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  };

  const handleToggleTodo = () => {
    setShowTodo(prev => !prev);
    if (!showTodo) {
      setShowDone(false);
    }
  };

  const handleToggleDone = () => {
    setShowDone(prev => !prev);
    if (!showDone) {
      setShowTodo(false);
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (showTodo && !todo.completed) return true;
    if (showDone && todo.completed) return true;
    if (!showTodo && !showDone) return true;
    return false;
  });

  const updateItemStates = (updatedTodos) => {
    const hasCompleted = updatedTodos.some(todo => todo.completed);
    const hasUncompleted = updatedTodos.some(todo => !todo.completed);

    setHasCompletedItems(hasCompleted);
    setHasUncompletedItems(hasUncompleted);

    if (!hasCompleted) {
      setShowDone(false);
    }

    if (!hasUncompleted) {
      setShowTodo(false);
    }
  };

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
                        variant={showTodo ? 'success' : 'outline-success'}
                        onClick={handleToggleTodo}
                        className="toggle-btn w-100"
                      >
                        To-Do
                      </Button>
                    </Col>
                    <Col xs={6} className="text-center">
                      <Button
                        variant={showDone ? 'primary' : 'outline-primary'}
                        onClick={handleToggleDone}
                        className="toggle-btn w-100"
                      >
                        Completed
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
              {((!hasUncompletedItems && hasCompletedItems) || (showDone && !showTodo)) && (
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
