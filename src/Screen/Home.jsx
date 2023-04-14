import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MainHome } from "./StyledHome/StyledHome";
import PageTransition from "../Components/PageTransition/PageTransition";
import { BsFillCartCheckFill } from "react-icons/all";
import bgTwo from "./StyledHome/imgPortada/Group 58.png";
import bgThree from "./StyledHome/imgPortada/Group 59.png";

import BurgerPortada from "./StyledHome/imgPortada/Group 37 (convert.io).webp";

import iconRed1 from "./StyledHome/imgRedes/image 34.svg";
import iconRed2 from "./StyledHome/imgRedes/image 35.svg";
import iconRed3 from "./StyledHome/imgRedes/image 36.svg";

import Classic from "./StyledHome/imgPortada/Group 55.png";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  const navigate = useNavigate();
  const exitLogin = async () => {
    navigate("/");
    sessionStorage.clear();
  };

  return (
    <>
      <PageTransition>
        <MainHome>
          <article className="contDataBurger">
            <section className="contBurger">
              <div className="contHamburger">
                <img src={BurgerPortada} alt="hamburger" />{" "}
              </div>

              <div className="contTxtRedBtn">
                <div className="contTxt">
                  <p>
                    Obten tu hamburgesa, por la compra de dos hamburgesas, te
                    llevas uno gratis.
                  </p>
                </div>

                <div className="contBtn">
                  <button>
                    <BsFillCartCheckFill /> Comprar ahora mismo
                  </button>
                </div>

                <div className="contRedes">
                  <img src={iconRed1} alt="fb" />

                  <img src={iconRed2} alt="instagram" />

                  <img src={iconRed3} alt="ws" />
                </div>
              </div>
            </section>

            <section className="contBurgersPrices">
              {/* <div className="contClassicBurger">
                <img src={Classic} alt="Classic Burger" />                
              </div> */}
              <div className="contCardBurger">
                <div className="contBurgerEspecial">
                  <div className="burgerEspecial">
                    <p>Especial Burger</p>
                  </div>
                  <div className="burgerEspecial">
                    <img src={bgThree} alt="burger Clasic" />
                  </div>
                  <div className="burgerEspecial">
                    <button>
                      {" "}
                      <BsFillCartCheckFill /> Comprar ahora mismo
                    </button>
                  </div>
                </div>

                <div className="contBurgerEspecial">
                  <div className="burgerEspecial">
                    <p>Especial Burger</p>
                  </div>
                  <div className="burgerEspecial">
                    <img src={bgTwo} alt="burger Classic" />
                  </div>
                  <div className="burgerEspecial">
                    <button>
                      {" "}
                      <BsFillCartCheckFill /> Comprar ahora mismo
                    </button>
                  </div>
                </div>
              </div>

              <div className="contCardBurger">
                <div className="contBurgerEspecial">
                  <div className="burgerEspecial">
                    <p>Especial Burger</p>
                  </div>
                  <div className="burgerEspecial">
                    <img src={bgThree} alt="burger Clasic" />
                  </div>
                  <div className="burgerEspecial">
                    <button>
                      {" "}
                      <BsFillCartCheckFill /> Comprar ahora mismo
                    </button>
                  </div>
                </div>

                <div className="contBurgerEspecial">
                  <div className="burgerEspecial">
                    <p>Especial Burger</p>
                  </div>
                  <div className="burgerEspecial">
                    <img src={bgTwo} alt="burger Classic" />
                  </div>
                  <div className="burgerEspecial">
                    <button>
                      {" "}
                      <BsFillCartCheckFill /> Comprar ahora mismo
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </MainHome>
      </PageTransition>
      <Footer />
    </>
  );
};

export default Home;
