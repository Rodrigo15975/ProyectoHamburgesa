import React from "react";
import { ContNotData } from "./StyledCart/StyledCart";
import { GrCart } from "react-icons/gr";
import { m } from "framer-motion";

const NotDataCart = () => {
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{height:"100%"}}
      >
        <ContNotData>
          <div className="title-notProduct">
            <GrCart />
            <h2>No tiene ninguna hamburguesa en su carrito</h2>
          </div>
        </ContNotData>
      </m.div>
    </>
  );
};

export default NotDataCart;
