import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Todo from './pages/Todo';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark'); // Add or remove dark background for the body
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'bg-dark text-white' : ''}`}>
        <MyNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Navigate to="/todo" />} />
            <Route path="/todo" element={<Todo darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
