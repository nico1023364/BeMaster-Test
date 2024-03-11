import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/profile" className="navbar-link">Perfil</Link>
        </li>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Cerrar sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
