import React, { useState, useEffect } from "react";
import PageTransition from "../../Components/PageTransition/PageTransition";
import { MainMenu } from "./StyledMenu/StyledMenu";
import Footer from "../../Components/Footer/Footer";
import bgPortada from "./img/Group 105.png";
import bgPortada2 from "./img/Group 107.png";
import bgPortada3 from "./img/grupo 108.png";
import CardBurger from "./CardBurger/CardBurger";
import {
  ContMainCard,
  ContTitleCard,
} from "./CardBurger/styledCard/StyledCard";
import imgOne from "./img/[removal 9.webp";
import imgTwo from "./img/[removal 10.webp";
import imgThree from "./img/[removal 11.webp";
import imgFour from "./img/[removal 13.webp";
import { dbFirestore } from "../../Firebase/KeyFirebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { m } from "framer-motion";

const imgs = {
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
};

const dataHamburgersRecommended = [
  {
    img: imgs.imgOne,
    price: 10,
    hamburger: "Bacon Double  XL",
    type: "Hamburguesa clásica con queso cheddar, lechuga, tomate, cebolla y nuestra salsa secreta.",
  },
  {
    img: imgs.imgTwo,
    price: 10,
    hamburger: "Double Cheeseburger",
    type: " Hamburguesa BBQ con queso cheddar, tocino, cebolla frita y salsa barbacoa casera.",
  },
  {
    img: imgs.imgThree,
    price: 10,
    hamburger: "Burger cheeseburger",
    type: "Hamburguesa con queso azul, lechuga, tomate, cebolla caramelizada y nuestra salsa secreta.",
  },
  {
    img: imgs.imgFour,
    price: 10,
    hamburger: "Kids Cheeseburger",
    type: "Hamburguesa vegetariana con una deliciosa hamburguesa de garbanzos, lechuga, tomate, pepino y nuestro aderezo especial.",
  },
];

const Menu = () => {
  const [hamburgerRecommended, setHamburgerRecommended] = useState([]);
  const [orderClass, setOrderClass] = useState({});
  const getDatos = () => {
    const docRef = collection(dbFirestore, "hamburgers");

    onSnapshot(docRef, (onshap) => {
      const hamburgers = onshap.docs.map((data) => {
        const values = data.data();
        return { id: data.id, ...values };
      });
      setHamburgerRecommended(hamburgers);
    });
  };

  useEffect(() => {
    getDatos();
  }, []);

  return (
    <>
      <PageTransition>
        <MainMenu>
          <div className="contChangeImg">
            <div className="cont-imgChange">
              <img className="pll1024" src={bgPortada} alt="portada" />
              <img className="pll926" src={bgPortada2} alt="portada" />
              <img className="pll512" src={bgPortada3} alt="portada" />
            </div>
          </div>
        </MainMenu>
        <ContTitleCard>
          <div className="card-title">
            <h1>Recommend Today</h1>
          </div>
          <div className="card-title">
            <p>Recomendaciones de hamburguesas que podrías probar.</p>
          </div>
        </ContTitleCard>

        <ContMainCard>
          {hamburgerRecommended.length > 0 ? (
            <article className="ContCards">
              <m.div className="Cards">
                {hamburgerRecommended.slice(0, 2).map((hamburgers) => (
                  <CardBurger key={hamburgers.id} hamburgers={hamburgers} />
                ))}
              </m.div>
              <div className="Cards">
                {hamburgerRecommended.slice(2, 4).map((hamburgers) => (
                  <CardBurger key={hamburgers.id} hamburgers={hamburgers} />
                ))}
              </div>
            </article>
          ) : (
            <h2>Loading...</h2>
          )}
        </ContMainCard>
        
      </PageTransition>
      <Footer />
    </>
  );
};

export default Menu;
