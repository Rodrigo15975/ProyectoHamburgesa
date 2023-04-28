import React, { useState, useEffect } from "react";

import { CardsBurger } from "./styledCard/StyledCard";
import { m } from "framer-motion";
import { BsCartCheckFill, BsFillCartCheckFill } from "react-icons/bs";
import Cart from "../ShoppingCart/Cart";

const modalTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
      mass: 0.3,
      bounce: 0.2,
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

const CardBurger = ({ hamburgers }) => {
  const [order, setOrder] = useState(false);

  const { hamburger, img, type, price } = hamburgers;
  const [openCart, setOpenCart] = useState(false);
  const [addNoticeHamburger, setAddNoticeHamburger] = useState(false);

  const dataHamburgerCard = (hamburgers) => {
    
    console.log(hamburgers);
  };

  useEffect(() => {
    
  }, []);

  const cartVisible = () => setOpenCart(true);

  return (
    <>
      <CardsBurger>
        <div className="data-burger">
          <div className="data">
            <div className="hamburger-title">
              <p>{hamburger}</p>
            </div>
            <div className="hamburger-description">
              <p>{type}</p>
            </div>
          </div>

          <div className="data">
            <div className="hamburger-price">
              <p>${price}.00</p>
            </div>
            <div className="button-order">
              <m.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 1 }}
                onMouseOver={() => setOrder(true)}
                onMouseOut={() => setOrder(false)}
                onClick={ () => dataHamburgerCard(hamburgers)   }
                key={order}
              >
                {order ? (
                  <BsFillCartCheckFill className="iconOrder" />
                ) : (
                  "Order Now "
                )}
              </m.button>
            </div>
          </div>
        </div>

        <div className="burger-img">
          <m.img whileHover={{ scale: 0.9 }} src={img} alt={"Hamburger"} />
        </div>
      </CardsBurger>

      <div>
        {openCart && (
          <m.div
            key={openCart}
            variants={modalTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ position: "fixed", top: 0, left: 0, zIndex: "29998" }}
          >
            <Cart openCart={openCart} setOpenCart={setOpenCart} />
          </m.div>
        )}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "2rem",
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
    </>
  );
};

export default CardBurger;
