import React, { useState } from "react";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineClose,
} from "react-icons/ai";

import classes from "./StreetPhotography.module.css";

const StreetPhotography = () => {
  const [modalActive, setModalActive] = useState(false);
  const [currentImage, setCurrentImage] = useState("1");

  const turnOnModalHandler = (el) => {
    setModalActive(true);
    setCurrentImage(el.target.id);
  };

  const turnOffModalHandler = () => {
    setModalActive(false);
    setCurrentImage(1);
  };

  const prevModalImageHandler = () => {
    currentImage == 1
      ? setCurrentImage(9)
      : setCurrentImage(Number(currentImage) - 1);
  };

  const nextModalImageHandler = () => {
    currentImage == 9
      ? setCurrentImage(1)
      : setCurrentImage(Number(currentImage) + 1);
  };

  return (
    <React.Fragment>
      {/*------ Modal ------*/}
      {modalActive && <div className={classes["modal-background"]} />}
      {modalActive && (
        <div className={classes["modal-content-wrapper"]}>
          <div className={classes["utility-row"]}>
            <span className={classes.icon} onClick={prevModalImageHandler}>
              <AiFillCaretLeft />
            </span>
            <img
              className={classes["modal-image"]}
              src={"/photos/street/large/photo" + currentImage + ".jpg"}
              alt="Modal Image"
            />
            <span className={classes.icon} onClick={nextModalImageHandler}>
              <AiFillCaretRight />
            </span>
          </div>
          <span
            className={classes["modal-close"]}
            onClick={turnOffModalHandler}
          >
            <AiOutlineClose />
          </span>
        </div>
      )}
      {/*------ Page ------*/}
      <div className={classes["page-wrapper"]}>
        <img
          className={classes.photo1 + " " + classes.photo}
          src={"/photos/street/photo1.jpg"}
          alt="photo1"
          id="1"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo2 + " " + classes.photo}
          src={"/photos/street/photo2.jpg"}
          alt="photo2"
          id="2"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo3 + " " + classes.photo}
          src={"/photos/street/photo3.jpg"}
          alt="photo3"
          id="3"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo4 + " " + classes.photo}
          src={"/photos/street/photo4.jpg"}
          alt="photo4"
          id="4"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo5 + " " + classes.photo}
          src={"/photos/street/photo5.jpg"}
          alt="photo5"
          id="5"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo6 + " " + classes.photo}
          src={"/photos/street/photo6.jpg"}
          alt="photo6"
          id="6"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo7 + " " + classes.photo}
          src={"/photos/street/photo7.jpg"}
          alt="photo7"
          id="7"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo8 + " " + classes.photo}
          src={"/photos/street/photo8.jpg"}
          alt="photo8"
          id="8"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo9 + " " + classes.photo}
          src={"/photos/street/photo9.jpg"}
          alt="photo9"
          id="9"
          onClick={turnOnModalHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default StreetPhotography;
