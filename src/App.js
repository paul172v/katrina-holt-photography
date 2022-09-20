import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import classes from "./App.module.css";

import NavDesktop from "./components/nav-desktop/NavDesktop";
import NavMobile from "./components/nav-mobile/NavMobile";
import AboutMe from "./pages/AboutMe";
import Portraits from "./pages/Portraits";
import StreetPhotography from "./pages/StreetPhotography";
import Nature from "./pages/Nature";
import Weddings from "./pages/Weddings";

function App() {
  const [navMobileActive, setNavMobileActive] = useState(false);

  const toggleMobileNavHandler = () => {
    setNavMobileActive(!navMobileActive);
  };

  const turnOffMobileNavHandler = () => {
    setNavMobileActive(false);
  };

  return (
    <React.Fragment>
      <div className={navMobileActive ? classes["mobile-nav-wrapper"] : ""}>
        {navMobileActive && <NavMobile />}
      </div>

      <div>
        <main className={classes["main-screen-wrapper"]}>
          <div className={classes["desktop-nav-wrapper"]}>
            <NavDesktop />
          </div>

          <div className={classes["main-page-wrapper"]}>
            <Routes>
              <Route path="/" element={<Navigate replace to="/about-me" />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route
                path="/portraits"
                element={<Portraits closeMobileNav={turnOffMobileNavHandler} />}
              />
              <Route
                path="/street-photography"
                element={
                  <StreetPhotography closeMobileNav={turnOffMobileNavHandler} />
                }
              />
              <Route
                path="/nature"
                element={<Nature closeMobileNav={turnOffMobileNavHandler} />}
              />
              <Route
                path="/weddings"
                element={<Weddings closeMobileNav={turnOffMobileNavHandler} />}
              />
            </Routes>
          </div>
        </main>

        <div
          className={classes["hamburger-menu-wrapper"]}
          onClick={toggleMobileNavHandler}
        >
          {!navMobileActive && <AiOutlineMenu />}
          {navMobileActive && <AiOutlineClose />}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
