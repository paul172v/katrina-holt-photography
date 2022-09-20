import React, { useState } from "react";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineClose,
} from "react-icons/ai";

import classes from "./Nature.module.css";

import ModalBackground from "../components/modal/ModalBackground";

const Nature = () => {
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
      ? setCurrentImage(6)
      : setCurrentImage(Number(currentImage) - 1);
  };

  const nextModalImageHandler = () => {
    currentImage == 6
      ? setCurrentImage(1)
      : setCurrentImage(Number(currentImage) + 1);
  };

  return (
    <React.Fragment>
      {/*------ Modal ------*/}
      {modalActive && <ModalBackground />}
      {modalActive && (
        <div className={classes["modal-content-wrapper"]}>
          <div className={classes["utility-row"]}>
            <span className={classes.icon} onClick={prevModalImageHandler}>
              <AiFillCaretLeft />
            </span>
            <img
              className={classes["modal-image"]}
              src={"/photos/nature/large/photo" + currentImage + ".jpg"}
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
          src={"/photos/nature/photo1.jpg"}
          alt="photo1"
          id="1"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo2 + " " + classes.photo}
          src={"/photos/nature/photo2.jpg"}
          alt="photo2"
          id="2"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo3 + " " + classes.photo}
          src={"/photos/nature/photo3.jpg"}
          alt="photo3"
          id="3"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo4 + " " + classes.photo}
          src={"/photos/nature/photo4.jpg"}
          alt="photo4"
          id="4"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo5 + " " + classes.photo}
          src={"/photos/nature/photo5.jpg"}
          alt="photo5"
          id="5"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo6 + " " + classes.photo}
          src={"/photos/nature/photo6.jpg"}
          alt="photo6"
          id="6"
          onClick={turnOnModalHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Nature;
