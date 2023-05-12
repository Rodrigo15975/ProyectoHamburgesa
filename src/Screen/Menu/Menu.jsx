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
import { BsCartCheckFill } from "react-icons/bs";
import Cart from "./ShoppingCart/Cart";

//Animacion de la ventana carrito
const modalTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
      mass: 0.5,
      bounce: 0.5,
    },
  },
  exit: {
    opacity: 0,

    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};

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
  //DBHAMBURGERSRECOMEND
  const [hamburgerRecommended, setHamburgerRecommended] = useState([]);

  const [openCart, setOpenCart] = useState(false);
  //ORDEN DE HAMBURUGESAS
  const [orderRequieredRecommend, setOrderRequieredRecommend] = useState(() => {
    const getBurgers = localStorage.getItem("burgerOrders");
    return getBurgers ? JSON.parse(getBurgers) : [];
  });

  const getDatos = () => {
    const docRef = collection(dbFirestore, "hamburgers");

    onSnapshot(docRef, (onshap) => {
      const hamburgers = onshap.docs.map((data) => {
        const values = data.data();
        //Los datos se trasnformar en un objeto
        return { id: data.id, ...values };
      });
      setHamburgerRecommended(hamburgers);
    });
  };

  const cartVisible = () => {
    document.querySelector("html").style.overflowY = "hidden";
    setOpenCart(true);
  };

  useEffect(() => {
    getDatos();
  }, []);

  return (
    <>
      <PageTransition>
        <MainMenu>
          <div className="contChangeImg" >
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
            <>
              <m.article className="ContCards">
                <m.div className="Cards">
                  {hamburgerRecommended.slice(0, 2).map((hamburgers) => (
                    <CardBurger
                      key={`hamburger-${hamburgers.id}`}
                      hamburgers={hamburgers}
                      openCart={openCart}
                      setOpenCart={setOpenCart}
                      setOrderRequieredRecommend={setOrderRequieredRecommend}
                      orderRequieredRecommend={orderRequieredRecommend}
                    />
                  ))}
                </m.div>
                <m.div className="Cards">
                  {hamburgerRecommended.slice(2, 4).map((hamburgers) => (
                    <CardBurger
                      key={`hamburger-card-${hamburgers.id}`}
                      hamburgers={hamburgers}
                      openCart={openCart}
                      setOpenCart={setOpenCart}
                      setOrderRequieredRecommend={setOrderRequieredRecommend}
                      orderRequieredRecommend={orderRequieredRecommend}
                    />
                  ))}
                </m.div>
              </m.article>
            </>
          ) : (
            <h2>Loading...</h2>
          )}

          {/* la ventana emergente del carrito */}
          {openCart && (
            <m.div
              key={openCart}
              variants={modalTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: "29998",
              }}
            >
              <Cart
                openCart={openCart}
                setOpenCart={setOpenCart}
                orderRequieredRecommend={orderRequieredRecommend}
                setOrderRequieredRecommend={setOrderRequieredRecommend}
              />
            </m.div>
          )}
        </ContMainCard>
      </PageTransition>


{/* ICON CARRITO */}
      <div
        style={{
          position: "fixed",
          bottom: "5rem",
          right: "2rem",
          zIndex: "9997",
        }}
        onClick={cartVisible}
      >
        <m.div whileHover={{ scale: 1.1, translateY: "-4px" }}>
          <BsCartCheckFill
            style={{ fontSize: "3.3rem", color: "#ff6676" }}
            cursor={"pointer"}
          />
        </m.div>
      </div>

      <Footer />
    </>
  );
};

export default Menu;
