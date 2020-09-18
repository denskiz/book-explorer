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

// import React from 'react';

// function Navbar() {
//   return (
//     <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
//       <h5 className="my-0 mr-md-auto font-weight-normal">Book Explorer</h5>
//       <nav className="my-2 my-md-0 mr-md-3">
//         <a className="p-2 text-dark font-weight-normal">
//           Search for books using the <i className="fab fa-google" />
//           oogle Books API
//         </a>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
