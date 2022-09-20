import React from "react";

import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={classes["page-wrapper"]}>
      <h2 className={classes.heading}>Hi, my name is Katrina</h2>
      <p className={classes.para}>
        Fusce auctor bibendum laoreet. Maecenas at dolor massa. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Quisque vel massa a lorem hendrerit semper id in nunc. Proin
        vehicula quam sed sem consequat ultrices. Ut erat arcu, maximus et
        turpis nec, aliquet tristique ante. Praesent quis maximus est. Donec
        porta in orci eget blandit.
      </p>
    </div>
  );
};

export default AboutMe;
