import React, { useState } from "react";

import Menu from "./menu";

import classes from "./navBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()
  const [like, setLike] = useState(false)
  
  return (
    <>
    <nav
      className={`w-100 ${classes.navBar_container} d-flex justify-content-between align-items-center`}>
      <button className={`bg-transparent border-0 ${classes.logo_container}`} onClick={() => navigate('/')}>
       <img className={classes.logo}
       src="./assets/navBar/logo.svg"
        alt="logo"/>
      </button>
      <Menu/>
      <div className="d-flex">
      <button className={`${classes.img_container} bg-transparent border-0`} onClick={() => setLike(!like)}>
        <img src={`./assets/navBar/${like ? 'active' : 'passive'}_heart.svg`} alt="" className="w-100 h-100"/>
      </button>
      <button className={`${classes.img_container} bg-transparent border-0`}>
      <img src={`./assets/navBar/user.svg`} alt="" className="w-100 h-100"/>
      </button>
      </div>
    </nav>
    </>
  );
};

export default NavBar;
