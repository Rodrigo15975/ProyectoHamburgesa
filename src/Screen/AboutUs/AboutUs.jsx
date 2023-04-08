import React from "react";
import PageTransition from "../../Components/PageTransition/PageTransition";
import { MainAbout } from "./StyledAbout/StyledAbout";
import Footer from "../../Components/Footer/Footer";


const AboutUs = () => {

  return (
    <>
      <PageTransition>
        <MainAbout>
          <section className="contMainAbout">
            <div className="ContAbout">
              <div className="cont-title">
                <h2>We're Braun Burger</h2>
              </div>
              <div className="cont-txt">
                <p>
                  Bienvenidos a nuestro sitio web. Somos una hamburguesería
                  local que se enorgullece de servir las mejores hamburguesas de
                  la ciudad. Utilizamos ingredientes frescos y de alta calidad
                  para asegurarnos de que cada hamburguesa que servimos sea
                  deliciosa y satisfactoria. Ofrecemos una variedad de opciones
                  de hamburguesas para satisfacer las necesidades de todos
                  nuestros clientes, incluyendo opciones vegetarianas y veganas.
                  Nos apasiona la comida y trabajamos arduamente para ofrecer
                  hamburguesas frescas y sabrosas en cada orden. ¡Esperamos
                  verte pronto en nuestro restaurante!
                </p>
              </div>
            </div>
            <div className="ContImgAbout">
              <div className="cont-img">
                <img
                  
                />
              </div>
            </div>
          </section>
        </MainAbout>
        <Footer/>
      </PageTransition>
    </>
  );
};

export default AboutUs;
