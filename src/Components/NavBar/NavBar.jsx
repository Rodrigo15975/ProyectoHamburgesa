import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import Burger from "./img/iconBurger.svg";
import User from "./img/iconUser.svg";
import {
  ContLogo,
  ContMainHome,
  ContNav,
  ContUser,
  NavHome,
  NavMobile,
} from "./StyledNavBar";

import iconOne from "./img/image 38.svg";
import iconTwo from "./img/image 39.svg";
import iconThree from "./img/image 40.svg";
import iconFour from "./img/image 44.svg";
import { m } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/KeyFirebase";

import { useNavigate } from "react-router-dom";
import Cart from "../../Screen/Menu/ShoppingCart/Cart";

const NavBar = () => {
  const username = sessionStorage.getItem("username");
  const userGoogle = sessionStorage.getItem("usernameGoogle");
  const usernameFacebook = sessionStorage.getItem("usernameFacebook");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const navigate = useNavigate();
  const Close = () => {
    sessionStorage.clear();
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("exit");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavMobile>
        <div className="contNavMobile">
          <div className="linkMobiles">
            <NavLink to={"/home"}>
              <img src={iconTwo} alt="Mobilehome" />
            </NavLink>
            <NavLink to={"/home/menu"}>
              <img src={iconOne} className="menuBurger" alt="Mobilemenu" />
            </NavLink>
            <NavLink to={"/home/about"}>
              <img src={iconFour} alt="Mobileabout" />
            </NavLink>
            <NavLink to={"/home/contact"}>
              <img src={iconThree} alt="Mobilecontact" />
            </NavLink>
            <div>
              Carrito
            </div>
            <div
              style={{ minHeight: "4.5rem", display:"flex" , alignItems:"center" }}
              onMouseEnter={() => setShowSubMenu(true)}
              onMouseLeave={() => setShowSubMenu(false)}
            >
              <img src={User} alt="Mobileuser" />
          <Cart />
              {showSubMenu && (
                <m.div
                  key={showSubMenu}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  style={{ position: "absolute", bottom: "8px" }}
                >
                  <button onClick={Close}>Log Out</button>
                </m.div>
              )}
            </div>
          </div>
        </div>
      </NavMobile>

      <NavHome>
        <ContMainHome>
          <ContLogo>
            <img src={Burger} alt="burger" />
            <p>Braun Burger</p>
          </ContLogo>
          <ContNav>
            <NavLink to={"/home"}>
              <img src={iconTwo} alt="home" />
            </NavLink>
            <NavLink className={"white"} to={"/home/menu"}>
              <img src={iconOne} alt="menu" />
            </NavLink>
            <NavLink className={"white"} to={"/home/about"}>
              <img src={iconThree} alt="about" />
            </NavLink>
            <NavLink to={"/home/contact"}>
              <img src={iconFour} alt="contact" />
            </NavLink>
          </ContNav>
          <ContUser>
            <p>{username || userGoogle || usernameFacebook}</p>
            <div
              style={{ minHeight: "4.5rem" }}
              onMouseEnter={() => setShowSubMenu(true)}
              onMouseLeave={() => setShowSubMenu(false)}
            >
              <img src={User} alt="user" />

              {showSubMenu && (
                <m.div
                  key={showSubMenu}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  style={{ position: "absolute", bottom: "8px" }}
                >
                  <button onClick={Close}>Log Out</button>
                </m.div>
              )}
            </div>
          </ContUser>
        </ContMainHome>
      </NavHome>
    </>
  );
};

export default NavBar;
