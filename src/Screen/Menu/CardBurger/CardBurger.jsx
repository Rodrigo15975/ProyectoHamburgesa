import React, { useState, useEffect } from "react";

import { CardsBurger } from "./styledCard/StyledCard";
import { m } from "framer-motion";
import { BsFillCartCheckFill } from "react-icons/bs";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CardBurger = ({
  hamburgers,
  setOrderRequieredRecommend,
  orderRequieredRecommend,
}) => {
  const { hamburger, type, price, img } = hamburgers;
  const [orderIcon, setOrderIcon] = useState(false);
  const sendOrder = () => {
    //OTRA FORMA DE HACER QUE NO SE REPITA EL PRODUCTO
    if (!orderRequieredRecommend.includes(hamburgers)) {
      setOrderRequieredRecommend([...orderRequieredRecommend, hamburgers]);
    }

    //fORMA DE NO HACER REPETIR EL PRODUCTO
    // if (!orderRequieredRecommend.some((data) => data.id === hamburgers.id)) {
    //   setOrderRequieredRecommend((prevState) => [...prevState, hamburgers]);
    //   return
    // }

    // updateOrder.some((data) =>
    //   data.id === hamburgers.id ? console.log("igual") : console.log("diferente")
    // );
  };

  return (
    <>
      
        <CardsBurger>
          <m.div className="data-burger">
            <m.div
              variants={container}
              initial="hidden"
              animate="show"
              className="data"
            >
              <m.div variants={item} className="hamburger-title">
                <p>{hamburger}</p>
              </m.div>

              <m.div variants={item} className="hamburger-description">
                <p>{type}</p>
              </m.div>
            </m.div>

            <m.div variants={container} className="data">
              <m.div variants={item} className="hamburger-price">
                <p>${price}.00</p>
              </m.div>

              <div className="button-order">
                <m.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 1 }}
                  onMouseOver={() => setOrderIcon(true)}
                  onMouseOut={() => setOrderIcon(false)}
                  // Click para enviar el ordenDatos
                  onClick={sendOrder}
                  key={orderIcon}
                >
                  {orderIcon ? (
                    <BsFillCartCheckFill className="iconOrder" />
                  ) : (
                    "Order Now "
                  )}
                </m.button>
              </div>
            </m.div>
          </m.div>

          <m.div variants={container} className="burger-img">
            <m.img
              whileHover={{ scale: 0.9 }}
              variants={item}
              src={img}
              alt={hamburger}
            />
          </m.div>
        </CardsBurger>
     
    </>
  );
};

export default CardBurger;
