// Header.js
import React from 'react';
import './header.css'; // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Chaperone</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/plantspots">Plants & Pots</a></li>
          <li><a href="/Tools">Tools</a></li>
          <li><a href="/ourservices">Our Services</a></li>
          <li><a href='/blog'>Blog</a></li>
          <li><a href='/ourstory'>Our Story</a></li>
          <li><a href='/faqs'>FAQs</a></li>
        </ul>
      </nav>
      <div>
        <nav>
        <ul className='nav-links'>
        <li><a href='/myprofile'>My Profile</a></li>
        <li><a href='/cart'>Cart</a></li>
        </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
