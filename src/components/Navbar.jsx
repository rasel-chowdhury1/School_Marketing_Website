import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Classaty</div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
