import React, { useState } from "react";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineClose,
} from "react-icons/ai";
import classes from "./ModalContent.module.css";

const ModalContent = (props) => {
  const prevModalImageHandler = () => {
    props.currentImage === 1 || props.currentImage === "1"
      ? props.setCurrentImage(Number(props.imagesTotal))
      : props.setCurrentImage(Number(props.currentImage) - 1);
  };

  const nextModalImageHandler = () => {
    props.currentImage === props.imagesTotal
      ? props.setCurrentImage(1)
      : props.setCurrentImage(Number(props.currentImage) + 1);
  };

  return (
    <div className={classes["modal-content-wrapper"]}>
      <div className={classes["utility-row"]}>
        <span className={classes.icon} onClick={prevModalImageHandler}>
          <AiFillCaretLeft />
        </span>
        <img
          className={classes["modal-image"]}
          src={`${props.imageDirectory}` + props.currentImage + ".jpg"}
          alt="Modal Image"
        />
        <span className={classes.icon} onClick={nextModalImageHandler}>
          <AiFillCaretRight />
        </span>
      </div>
      <span className={classes["modal-close"]} onClick={props.closeModal}>
        <AiOutlineClose />
      </span>
    </div>
  );
};

export default ModalContent;
