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
import ModalMgs from "../ModalMgs/ModalMgs";
import { GrFacebook } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
const NavBar = () => {
  const username = sessionStorage.getItem("username");
  const userGoogle = sessionStorage.getItem("usernameGoogle");
  const usernameFacebook = sessionStorage.getItem("usernameFacebook");

  const [openContact, setOpenContact] = useState(false);

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
            <img src={User} alt="Mobileuser" />
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
            <img src={User} alt="user" />
          </ContUser>
        </ContMainHome>
      </NavHome>
    </>
  );
};

export default NavBar;
