import React from 'react';
import {NavLink, Link} from "react-router-dom";
import "./NavBar.css"

const style = {
  navBar: {
fontSize: 30,

  },
  text: {
    color: "#ffffff"
  }
}
const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary" style={style.navBar}>
        <div className="container-fluid">
         <Link to="/" className="brand-logo" style={style.text}>
           Behavior Chart
         </Link>
          <ul className="active" >
       <NavLink to="/student" style={style.text}>Student</NavLink>
        </ul>
        </div>
      </nav>
    );
};

export default NavBar;