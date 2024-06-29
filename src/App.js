import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Todo from './pages/Todo';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
