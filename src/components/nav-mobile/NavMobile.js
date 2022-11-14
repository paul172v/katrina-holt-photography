import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineCamera, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import classes from "./NavMobile.module.css";

const NavMobile = (props) => {
  return (
    <nav className={classes["nav-wrapper"]}>
      <div className={classes["signature-wrapper"]}>
        <h1 className={classes["signature-h1"]}>
          Katrina Holt <br /> Photography
        </h1>
        <span className={classes["signature-icon"]}>
          <AiOutlineCamera />
        </span>
      </div>
      <ul className={classes["nav-ul"]}>
        <li className={classes["nav-li"]}>
          <NavLink
            onClick={props.turnOffNav}
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/about-me"
          >
            About Me
          </NavLink>
        </li>
        <li className={classes["nav-li"]}>
          <NavLink
            onClick={props.turnOffNav}
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/portraits"
          >
            Portraits
          </NavLink>
        </li>
        <li className={classes["nav-li"]}>
          <NavLink
            onClick={props.turnOffNav}
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/street-photography"
          >
            Street Photography
          </NavLink>
        </li>
        <li className={classes["nav-li"]}>
          <NavLink
            onClick={props.turnOffNav}
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/nature"
          >
            Nature
          </NavLink>
        </li>
        <li className={classes["nav-li"]}>
          <NavLink
            onClick={props.turnOffNav}
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/weddings"
          >
            Weddings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
