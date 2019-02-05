import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from "../device.svg";
import logo from "../Snowman.png";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="Snowman" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fas fa-cart-plus" />My cart
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
