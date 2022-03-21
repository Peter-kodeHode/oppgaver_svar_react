import React from "react";
import {
  Link,
  useNavigate
} 
from "react-router-dom";
import {
  NavBar,
  NavButtons,
  Arrow,

} from "./Header/headerStyles"
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
    <NavBar>
      <Arrow src={arrow} onClick={goBack}/>
        <Link to="/">
          <NavButtons>Main Page</NavButtons>
        </Link>
        <Link to="/aboutus">
          <NavButtons>About Us</NavButtons>
        </Link>
        <Link to="/projects">
          <NavButtons>Projects</NavButtons>
        </Link>
      <Arrow right src={arrow} onClick={goNext}/>
    </NavBar>
    )
};

export default Header;