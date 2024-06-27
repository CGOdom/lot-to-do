import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Add new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-2">Add</button>
    </form>
  );
};

export default TodoForm;
