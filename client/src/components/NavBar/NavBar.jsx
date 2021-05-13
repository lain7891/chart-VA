import React from 'react';
import {NavLink, Link} from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
         <Link to="/" className="brand-logo">
           Behavior Chart
         </Link>
          <ul className="active">
       <NavLink to="/student">Student</NavLink>
        </ul>
        </div>
      </nav>
    );
};

export default NavBar;