import React, { useState } from "react";
import { motion } from "framer-motion";

import classes from "./Weddings.module.css";

import ModalBackground from "../components/modal/ModalBackground";
import ModalContent from "../components/modal/ModalContent";

const Weddings = () => {
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
          imagesTotal={7}
          imageDirectory="/photos/weddings/large/photo"
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
          src={"/photos/weddings/photo1.jpg"}
          alt="photo1"
          id="1"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo2 + " " + classes.photo}
          src={"/photos/weddings/photo2.jpg"}
          alt="photo2"
          id="2"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo3 + " " + classes.photo}
          src={"/photos/weddings/photo3.jpg"}
          alt="photo3"
          id="3"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo4 + " " + classes.photo}
          src={"/photos/weddings/photo4.jpg"}
          alt="photo4"
          id="4"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo5 + " " + classes.photo}
          src={"/photos/weddings/photo5.jpg"}
          alt="photo5"
          id="5"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo6 + " " + classes.photo}
          src={"/photos/weddings/photo6.jpg"}
          alt="photo6"
          id="6"
          onClick={turnOnModalHandler}
        />
        <img
          className={classes.photo7 + " " + classes.photo}
          src={"/photos/weddings/photo7.jpg"}
          alt="photo7"
          id="7"
          onClick={turnOnModalHandler}
        />
      </motion.div>
    </React.Fragment>
  );
};

export default Weddings;
