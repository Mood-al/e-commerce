import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary px-1">
      <div className="container">
        <Link to="/" className="navbar-brand text-center text-warning ">
          <i className="fas fa-mobile-alt fa-2x  "></i>
          <span className="d-block">phoney</span>
        </Link>
        <ul className="navbar-nav ">
          <li className="navbar-item">
            <Link to="/" className="navbar-link text-white pl-4">
              product
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button className="btn btn-warning px-2">
            Cart
            <i className="fas fa-cart-plus"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
