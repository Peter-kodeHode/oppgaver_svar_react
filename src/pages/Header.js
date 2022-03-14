import React from "react";
import {
  Link} 
  from "react-router-dom";
import "./Header/headerStyles.css"

  const Header = () => {
    return (
    <nav className="navBar">
    <Link to="/"><button>Main Page</button></Link>
    <Link to="/aboutus"><button>About Us</button></Link>
    <Link to="/projects"><button>Projects</button></Link>
    </nav>)
};

export default Header;