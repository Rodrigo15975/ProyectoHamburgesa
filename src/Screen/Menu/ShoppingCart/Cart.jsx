import React, { useState, useEffect } from "react";

import { ContCart, MainCart } from "./StyledCart/StyledCart";

const Cart = ({ openCart, setOpenCart }) => {



  const closeCart = () => setOpenCart(!openCart);
  return (
    <>
      <MainCart onClick={closeCart}>
        <ContCart onClick={(e) => e.stopPropagation()}>
          <div className="data">
            <h2>hola</h2>
            <button onClick={closeCart}>Exit</button>
          </div>
        </ContCart>
      </MainCart>
    </>
  );
};

export default Cart;
