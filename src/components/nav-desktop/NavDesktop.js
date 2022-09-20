import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineCamera, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import classes from "./NavDesktop.module.css";

const NavDesktop = () => {
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
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/about-me"
          >
            About Me
          </NavLink>
        </li>
        <li className={classes["nav-li"]}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/portraits"
          >
            Portraits
          </NavLink>
        </li>
        <li className={classes["nav-li"]}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/street-photography"
          >
            Street Photography
          </NavLink>
        </li>
        <li className={classes["nav-li"]}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/nature"
          >
            Nature
          </NavLink>
        </li>
        <li className={classes["nav-li"]}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/weddings"
          >
            Weddings
          </NavLink>
        </li>
      </ul>
      <div className={classes["contact-wrapper"]}>
        <h3 className={classes["contact-heading"]}>Contact</h3>
        <p className={classes["contact-text"]}>Katrina Holt</p>
        <p className={classes["contact-text"]}>London</p>
        <a className={classes["contact-email"]} href="mailto:#">
          KatrinaHolt567@gmail.com{" "}
          <span className={classes["email-icon"]}>
            <AiOutlineMail />
          </span>
        </a>
        <a className={classes["contact-call"]} href="tel:#">
          +445672 645965{" "}
          <span className={classes["call-icon"]}>
            <AiOutlinePhone />
          </span>
        </a>
      </div>
      <p className={classes.copyright}>©2022 Katrina Holt Photography</p>
    </nav>
  );
};

export default NavDesktop;
