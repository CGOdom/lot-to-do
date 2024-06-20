import React, { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <Container className="mt-4">
      <h2>Todo List</h2>
      <Form onSubmit={addTodo}>
        <Form.Group controlId="formTask">
          <Form.Label>New Task</Form.Label>
          <Form.Control
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Add Task
        </Button>
      </Form>
      <ListGroup className="mt-4">
        {todos.map((todo, index) => (
          <ListGroup.Item
            key={index}
            onClick={() => toggleComplete(index)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Todo;
