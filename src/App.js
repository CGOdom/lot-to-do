import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Todo from './pages/Todo';
import Contact from './pages/Contact';
import './App.css'; // Import app styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
