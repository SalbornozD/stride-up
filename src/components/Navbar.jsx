// src/components/Navbar.js
import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Stride - up
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/category/Infantil">
                Infantil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Terror">
                Terror
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Ficcion">
                Ficción
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;