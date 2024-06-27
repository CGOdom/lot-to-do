import React, { useState } from 'react';
import { Container, Button, ButtonGroup, Card, Row, Col } from 'react-bootstrap';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import './Todo.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = { id: nanoid(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
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
                <Button className="btn-all" onClick={() => setFilter('all')}>All</Button>
                <Button className="btn-todo" onClick={() => setFilter('todo')}>To-do</Button>
                <Button className="btn-done" onClick={() => setFilter('done')}>Done</Button>
              </ButtonGroup>
              <TodoForm onAddTodo={addTodo} />
              <TodoList todos={filteredTodos} onToggleComplete={toggleComplete} onDelete={deleteTodo} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;
