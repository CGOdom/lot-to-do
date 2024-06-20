import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TodoForm = ({ addItem }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addItem(task);
      setTask('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
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
  );
};

export default TodoForm;
