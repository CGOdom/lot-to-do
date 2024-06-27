import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container, Button, ButtonGroup, Card, Row, Col } from 'react-bootstrap';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import './Todo.css';

const Todo = () => {
  const [todos, setTodos] = useState(getInitialState());
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function getInitialState() {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  }

  const addItem = (text) => {
    setTodos([...todos, { id: nanoid(), text, completed: false }]);
  };

  const deleteItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'todo') return !todo.completed;
    if (filter === 'done') return todo.completed;
    return true;
  });

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <h2 className="mb-4 text-center">To-Do List</h2>
              <ButtonGroup className="mb-3 w-100">
                <Button variant={filter === 'all' ? 'primary' : 'secondary'} onClick={() => setFilter('all')}>All</Button>
                <Button variant={filter === 'todo' ? 'primary' : 'secondary'} onClick={() => setFilter('todo')}>To-do</Button>
                <Button variant={filter === 'done' ? 'primary' : 'secondary'} onClick={() => setFilter('done')}>Done</Button>
              </ButtonGroup>
              <TodoForm addItem={addItem} />
              <TodoList todos={filteredTodos} deleteItem={deleteItem} toggleComplete={toggleComplete} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;
