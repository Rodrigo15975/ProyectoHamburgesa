import React, { useState, useEffect } from "react";

import { CardsBurger } from "./styledCard/StyledCard";
import { m } from "framer-motion";
import { BsFillCartCheckFill } from "react-icons/bs";

const CardBurger = ({ hamburgers }) => {
  const [order, setOrder] = useState(false);
  const [imgScale, setImgScale] = useState(false);
  const [urlImg, setUrlImg] = useState(null);
  const { hamburger, img, type, price } = hamburgers;

  const data = (hamburgers) => {
    console.log(hamburgers);
  };
  const sendUrlImg = (img) => img && (setUrlImg(img), setImgScale(true));

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
                onClick={() => data(hamburgers)}
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

        <div className="burger-img" onClick={() => sendUrlImg(img)}>
          <m.img whileHover={{ scale: 0.9 }} src={img} alt={"Hamburger"} />
        </div>
      </CardsBurger>
      {imgScale && (
        <m.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={{ imgScale }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#0000007a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <button
              style={{
                position: "absolute",
                top: "-2rem",
                height: "2rem",
                width: "7rem",
                right: "-2rem",
                background: "rgb(255, 178, 62)",
                color: "White",
              }}
              onClick={() => setImgScale(false)}
            >
              X
            </button>
            <img src={urlImg} alt="hamburger" />
          </div>
        </m.aside>
      )}
    </>
  );
};

export default CardBurger;
