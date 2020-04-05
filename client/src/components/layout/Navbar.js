import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand lg">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand"
          style={{ fontFamily: "Montserrat", fontSize: "1.8em" }}
        >
          {" "}
          babiri.net
          <img
            src={require(`../../img/logo.png`)}
            alt="babirilogo"
            key="babirilogo"
          />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li
              className="navbar-item"
              style={{
                marginLeft: "0.1em",
                marginRight: "0.1em",
                fontSize: "1.1em",
                fontFamily: "Lato"
              }}
            >
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li
              className="navbar-item"
              style={{
                marginLeft: "0.1em",
                marginRight: "0.1em",
                fontSize: "1.1em",
                fontFamily: "Lato"
              }}
            >
              <Link to="/usage" className="nav-link">
                Usage
              </Link>
            </li>
            <li
              className="navbar-item"
              style={{
                marginLeft: "0.1em",
                marginRight: "0.1em",
                fontSize: "1.1em",
                fontFamily: "Lato"
              }}
            >
              <Link to="/teams" className="nav-link">
                Teams
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
