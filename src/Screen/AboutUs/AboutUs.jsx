import React from "react";
import PageTransition from "../../Components/PageTransition/PageTransition";
import { MainAbout } from "./StyledAbout/StyledAbout";
import Footer from "../../Components/Footer/Footer";

import ImgOne from "./img/image 59.png";
import ImgTwo from "./img/image 60.png";
import ImgThree from "./img/image 61.png";

import IconOne from "./img/image 62.svg";
import IconTwo from "./img/image 63.svg";
import IconThree from "./img/image 64.svg";
import { m } from "framer-motion";


const AboutUs = () => {
  return (
    <>
      <PageTransition>
      
        <MainAbout>
          <div className="ContAboutMain">
            <div className="InfoAbout">

              <div className="About  paddinAbout ">
                <div className="Info paddingInfo ">
                  <img src={IconOne} alt="iconabout" />
                </div>
                <div className="Info paddingInfo">
                  <p className="titleInfo" >Our Portfolio</p>
                </div>
                <div className="Info paddingInfo ">
                  <p className="txt" >
                    ¡Bienvenidos a nuestra página de hamburguesas! Somos un
                    restaurante dedicado a brindar la mejor experiencia
                    culinaria a nuestros clientes. Ofrecemos hamburguesas
                    deliciosas y de alta calidad, hechas con ingredientes
                    frescos y de la mejor calidad.
                  </p>
                </div>
              </div>

              <div className="About p1024   ">
                <m.img  className="img  "  whileHover={{scale: 1.2}}  src={ImgTwo} alt="portadaabout" />
              </div>

              <div className="About paddinAbout  ">
                <div className="Info paddingInfo">
                  {" "}
                  <img src={IconTwo} alt="iconabout" />{" "}
                </div>
                <div className="Info paddingInfo ">
                  <p className="titleInfo" >Our Services</p>
                </div>
                <div className="Info paddingInfo ">
                  <p  className="txt"  >
                    En nuestro restaurante de hamburguesas, nos esforzamos por
                    brindar un servicio excepcional a nuestros clientes. Desde
                    el momento en que entras por nuestras puertas, nuestro
                    equipo está dedicado a asegurarse de que tengas una
                    experiencia culinaria inolvidable.
                  </p>
                </div>
              </div>
            </div>
            <div className="InfoAbout">
              <div className="About p926">
                <m.img className="img  "   whileHover={{scale: 1.2}}  src={ImgThree} alt="portadaabout" />
              </div>

              <div className="About paddinAbout">
                <div className="Info paddingInfo ">                  
                  <img src={IconThree} alt="iconabout" />
                </div>
                <div className="Info paddingInfo ">
                  <p className="titleInfo" >About Company</p>
                </div>
                <div className="Info paddingInfo ">
                  <p className="txt" >
                    Somos una empresa dedicada a brindar productos y servicios
                    excepcionales a nuestros clientes. Nos esforzamos por
                    satisfacer las necesidades de nuestros clientes a través de
                    la calidad, la innovación y la atención al detalle.
                  </p>
                </div>
              </div>

              <div className="About scale ">
                <m.img className="img"   whileHover={{scale: 1.2}}   src={ImgOne} alt="portadabout" />
              </div>
            </div>
          </div>
        </MainAbout>
      </PageTransition>
      <Footer />
    </>
  );
};

export default AboutUs;
