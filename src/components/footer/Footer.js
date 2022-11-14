import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes["footer-wrapper"]}>
      <h3 className={classes["footer-heading"]}>Contact</h3>
      <p className={classes["footer-text"]}>Katrina Holt</p>
      <p className={classes["footer-text"]}>London</p>
      <a className={classes["footer-email"]} href="mailto:#">
        KatrinaHolt567@gmail.com{" "}
        <span className={classes["email-icon"]}>
          <AiOutlineMail />
        </span>
      </a>
      <a className={classes["footer-call"]} href="tel:#">
        +445672 645965{" "}
        <span className={classes["call-icon"]}>
          <AiOutlinePhone />
        </span>
      </a>

      <p className={classes.copyright}>©2022 Katrina Holt Photography</p>
    </div>
  );
};

export default Footer;
