import React, { useState } from "react";

import classes from "./Nature.module.css";

import ModalBackground from "../components/modal/ModalBackground";
import ModalContent from "../components/modal/ModalContent";

const Nature = () => {
  const [modalActive, setModalActive] = useState(false);

  const [currentImage, setCurrentImage] = useState(Number(1));

  const turnOnModalHandler = (el) => {
    setModalActive(true);
    setCurrentImage(el.target.id);
  };

  const turnOffModalHandler = () => {
    setModalActive(false);
    setCurrentImage(1);
  };

  const setCurrentImageHandler = (img) => {
    setCurrentImage(img);
  };

  return (
    <React.Fragment>
      {/*------ Modal ------*/}
      {modalActive && <ModalBackground />}

      {modalActive && (
        <ModalContent
          openModal={turnOnModalHandler}
          closeModal={turnOffModalHandler}
          currentImage={currentImage}
          setCurrentImage={setCurrentImageHandler}
          imagesTotal={6}
          imageDirectory="/photos/nature/large/photo"
        />
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
