import React from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Todo</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default MyNavbar;
