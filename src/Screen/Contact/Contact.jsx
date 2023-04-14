import React, { useState } from "react";

import PageTransition from "../../Components/PageTransition/PageTransition";
import { ContMainContact } from "./StyledContact/StyledContact";

import { FiInstagram } from "react-icons/fi";
import { ImFacebook, ImWhatsapp } from "react-icons/im";
import { m } from "framer-motion";
import ContactImg from "./image 54.png";
import BackImg from "./hombre-divertido-vasos-comiendo-hamburguesas-aislado-blanco_144627-34423.jpg";
import { NavLink } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const VariantsHover = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Contact = () => {
  const [hoverImg, setHoverImg] = useState(false);
  const ImgsContact = {
    back: BackImg,
    front: ContactImg,
  };
  const keyImg = hoverImg ? "Front" : "default";

  return (
    <>
      <PageTransition>
        <ContMainContact>
          <div className="ConteinerContact">
            <div className="contContact">
              <div className="contInfo">
                <h2>Contact</h2>
              </div>

              <div className="contInfo">
                <p>
                  Bienvenidos a nuestro sitio web. Somos una hamburguesería
                  local que se enorgullece de servir las mejores hamburguesas de
                  la ciudad.
                </p>
              </div>
            </div>

            <m.div className="contContactImg">
              <m.img
                className="imgContact"
                key={keyImg}
                onMouseOver={() => setHoverImg(true)}
                onMouseLeave={() => setHoverImg(false)}
                variants={VariantsHover}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                alt="hamburgesas"
                src={hoverImg ? ImgsContact.back : ImgsContact.front}
              />
            </m.div>
            <div className="contLinkContact ">
              <m.div className="linkContact contWs">
                <NavLink
                  to={"https://wa.me/931022090"}
                  rel="noreferer"
                  target="_blank"
                >
                  <ImWhatsapp className="iconContact ws " /> <p>WhatsApp</p>
                </NavLink>
              </m.div>
              <div className="linkContact  Contim ">
                <NavLink
                  to={"https://www.instagram.com/rumplerbraunrodrigo/"}
                  rel="noreferer"
                  target="_blank"
                >
                  <FiInstagram className="iconContact im" />
                  <p>Instagram</p>
                </NavLink>
              </div>
              <div className="linkContact Contfb ">
                <NavLink
                  to={"https://www.facebook.com/Roller15975"}
                  rel="noreferer"
                  target="_blank"
                >
                  <ImFacebook className="iconContact fb" /> <p>Facebook</p>
                </NavLink>
              </div>
            </div>
          </div>
        </ContMainContact>
      </PageTransition>
      <Footer />
    </>
  );
};

export default Contact;
