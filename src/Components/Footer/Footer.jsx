import React from "react";
import { ContMainFooter } from "./StyledFooter/StyledFooter";
import { BsWhatsapp } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <ContMainFooter>
        <div className="FooterInfo">
          <div className="MainFooter">
            <div className="ContInfoFooter">
              <div className="ContTxtBraun">
                <div className="TitleFooter">
                  <p>Braun Burger</p>
                </div>
                <div className="TxtFooter">
                  <p className="txtFooter">
                    Nos apasiona la comida y trabajamos arduamente para ofrecer
                    hamburguesas frescas y sabrosas en cada orden.
                  </p>
                </div>
              </div>

              <div className="contAbout">
                <div className="About">
                  <p>About</p>
                </div>
                <div className="AboutTxt">
                  <p className="txtFooter">Home</p>
                  <p className="txtFooter">Features</p>
                  <p className="txtFooter">FAQs</p>
                  <p className="txtFooter">Reviews</p>
                  <p className="txtFooter">Stories</p>
                </div>
              </div>
            </div>

            <div className="ContInfoFooter ">
              <div className="ContPrivacy">
                <div className="Privacy">
                  <p>Privacy</p>
                </div>
                <div className="TxtPrivacy">
                  <p className="txtFooter">Privacy</p>
                  <p className="txtFooter">Policy</p>
                  <p className="txtFooter">Payment</p>
                  <p className="txtFooter">Terms</p>
                </div>
              </div>

              <div className="ContContactsFooter">
                <div className="ContactUs">
                  <p>Contact Us</p>
                </div>
                <div className="ContactNumber">
                  <p className="txtFooter">+51 931 022 090</p>
                </div>
                <div className="ConctGmail">
                  <p className="txtFooter">Rodrigorumpler@gmail.com</p>
                </div>
                <div className="ConctRedes">
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
