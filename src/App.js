import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Todo from './pages/Todo';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark-mode');
    document.body.classList.toggle('bg-light-mode');
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={`App ${darkMode ? 'bg-dark-mode' : 'bg-light-mode'}`}>
        <MyNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Navigate to="/list" />} />
            <Route path="/list" element={<Todo darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
