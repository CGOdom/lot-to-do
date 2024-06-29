import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

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
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        {task.trim() && (
          <Button type="submit" variant="success">
            Add Task
          </Button>
        )}
      </InputGroup>
    </Form>
  );
};

export default TodoForm;
