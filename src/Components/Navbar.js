import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <b className='bren'>Bazar.PK🛍️</b>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact Us</Link>
      <div className="nav-buttons">
        <Link to="/cart">
          <FaCartPlus />
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
