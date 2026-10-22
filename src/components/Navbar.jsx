
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img
          src={logo}
          alt="Shree Sawariya Medical Store"
          className="logo-image"
        />
      </Link>

      <div className="nav-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/medicines">Medicines</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
