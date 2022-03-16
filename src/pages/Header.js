import React from "react";
import {
  Link,
  useNavigate
} 
  from "react-router-dom";
import "./Header/headerStyles.css"
import arrow from "../images/Header/Vector.svg"

  const Header = () => {
    
      let navigate = useNavigate();
      function goBack() {
        navigate(-1)
      }
      function goNext() {
        navigate(1)
      }

    return (
    <div className="navBar">
      <img className="arrowBack" src={arrow} onClick={goBack}/>
    <Link to="/"><button>Main Page</button></Link>
    <Link to="/aboutus"><button>About Us</button></Link>
    <Link to="/projects"><button>Projects</button></Link>
      <img className="arrowNext" src={arrow} onClick={goNext}/>
    </div>)
};

export default Header;