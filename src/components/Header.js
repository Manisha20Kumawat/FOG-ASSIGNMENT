import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";
import logo from "../images/logo.png";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src={logo} className="logo" alt="Logo" />
        Furniro
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="d-flex ms-auto">
        <a href="#" className="me-3">
          <i className="bi bi-person"></i>
        </a>
        <a href="#" className="me-3">
          <i className="bi bi-search"></i>
        </a>
        <a href="#" className="me-3">
          <i className="bi bi-heart"></i>
        </a>
        <a href="#">
          <i className="bi bi-cart"></i>
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
