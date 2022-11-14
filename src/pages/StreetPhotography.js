import React, { useState } from "react";
import { motion } from "framer-motion";

import classes from "./StreetPhotography.module.css";

import ModalBackground from "../components/modal/ModalBackground";
import ModalContent from "../components/modal/ModalContent";

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
          imagesTotal={9}
          imageDirectory="/photos/street/large/photo"
        />
      )}
      {/*------ Page ------*/}
      <motion.div
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={classes["page-wrapper"]}
      >
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
      </motion.div>
    </React.Fragment>
  );
};

export default StreetPhotography;
