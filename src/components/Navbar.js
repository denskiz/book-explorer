import React, { Fragment } from "react";
import "components/Navbar.css";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Book Explorer</a>
          <a className="text-light font-weight-normal">
            Search for books using the <i className="fab fa-google" />
            oogle Books API
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
