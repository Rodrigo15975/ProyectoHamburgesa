import React from "react";
import { ContMainFooter } from "./StyledFooter/StyledFooter";

import iconBurger from "./iconBurger.svg";
import { BsWhatsapp } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <ContMainFooter>
        <div className="ConteinerInfoFooter">
        
          <div className="MainInfoFooter">
            <div className="InfoFooter">
              <div className="Info">
                <img src={iconBurger} alt="burger" />
                <p>Braun Burger</p>
              </div>

              <div className="TxtInfo">
                <p>
                  Nos apasiona la comida y trabajamos arduamente para ofrecer
                  hamburguesas frescas y sabrosas en cada orden.{" "}
                </p>
              </div>
            </div>
            <div className="ContInfoExtra">
              <div className="contAbout">
                <p>About</p>
              </div>
              <div className="Extra">
                <p>Home</p>
                <p>Features</p>
                <p>FAQs </p>
                <p>Reviews</p>
                <p>Stories</p>
              </div>
            </div>
          </div>

          <div className="MainPrivacys" >

            <div className="ContInfoPrivacys">
              <div className="PrivacyInfo">
                <p>Privacy</p>
              </div>
              <div className="PolicyTerms">
                <p>Privacy</p>
                <p>Policy</p>
                <p>Payment</p>
                <p>Terms</p>
              </div>
            </div>

            <div className="ContContactsFooter">
              <div className="contactUs">
                <p>Contact Us</p>
              </div>
              <div className="number">
                <p>+51 931 022 090</p>
              </div>
              <div className="gmail">
                <p>Rodrigorumpler@gmail.com</p>
              </div>

              <div className="ContredesFooters">

                <NavLink
                  to={"https://www.facebook.com/Roller15975"}
                  rel="noreferer"
                  target="_blank"
                >
                  <ImFacebook className="footerFB" />
                </NavLink>
                <NavLink
                  to={"https://www.instagram.com/rumplerbraunrodrigo/"}
                  rel="noreferer"
                  target="_blank"
                >
                  <FaInstagram className="footerIM" />
                </NavLink>

                <NavLink
                  to={"https://wa.me/931022090"}
                  rel="noreferer"
                  target="_blank"
                >
                  <BsWhatsapp className="footerWS" />
                </NavLink>
                <NavLink
                  to={"https://twitter.com/RumplerRodrigo"}
                  rel="noreferer"
                  target="_blank"
                >
                  <GrTwitter className="footerTwitter" />
                </NavLink>
              </div>

            </div>

          </div>

        </div>
        <div className="ConteinerTerminosFooter">
          <div className="contCopy">
            <p>@ Copyright 2023 Braun all rights reserved</p>
          </div>
          <div className="contTerms">
            <p>Contact</p>
            <p>Terms</p>
          </div>
        </div>
      </ContMainFooter>
    </>
  );
};

export default Footer;
