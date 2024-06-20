import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from 'react-bootstrap';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const Todo = () => {
  const [todos, setTodos] = useState(getInitialState());

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

  return (
    <Container className="mt-4">
      <h2>Todo List</h2>
      <TodoForm addItem={addItem} />
      <TodoList todos={todos} deleteItem={deleteItem} />
    </Container>
  );
};

export default Todo;
