import React, { useState, useEffect } from "react";
import { ContMain } from "./styled/StyledCartData";
import { m } from "framer-motion";

import { BsTrash, GrFormSubtract, IoMdAdd } from "react-icons/all";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CartDataOrder = ({ dataCart, deleteBurger, setTotalprice }) => {
  const { type, hamburger, price, img, id } = dataCart;
  const [amountBurger, setAmountBurger] = useState(0);
  const [priceForBurger, setPriceForBurger] = useState(0);

  const changeAmountBurger = () => {
    setAmountBurger((preBurger) => preBurger + 1);
    setPriceForBurger((prePrice) => prePrice + price);
    setTotalprice((prevTotalPrice) => prevTotalPrice + price);
  };

  const changeDecrementBurger = () => {
    if (amountBurger > 0)
      return (
        setAmountBurger((preAmountBurger) => preAmountBurger - 1),
        setPriceForBurger((prePrice) => prePrice - price),
        setTotalprice((prevTotalPrice) => prevTotalPrice - price)
      );
  };

  return (
    <>
      <ContMain>
        <m.div
          variants={container}
          initial={"hidden"}
          animate="show"
          className="ContDataCart"
        >
          <m.div className="DataCart">
            <m.img variants={item} src={img} alt={hamburger} />
          </m.div>
          <m.div className="DataCart Data  ">
            <div className="Cart">
              <div className="CartDescription">
                <m.h2 variants={item}>{hamburger}</m.h2>
                <m.p variants={item}>{type}</m.p>
              </div>

              <div className="BuyPhaseBurger ContbtnAddSubTraction">
                <div className="btnAddSub">
                  <button className="btnAdd" onClick={changeAmountBurger}>
                    <IoMdAdd />
                  </button>

                  <button className="btnRemove" onClick={changeDecrementBurger}>
                    <GrFormSubtract />
                  </button>
                </div>

                <div className="priceburger">
                  <m.p variants={item}>${price}.00</m.p>
                </div>

                <div className="trash-burger">
                  <button onClick={() => deleteBurger(id)}>
                    <BsTrash />
                  </button>
                </div>
              </div>

              <div className="BuyPhaseBurger CantidadPrice ">
                <div className="buttonBuy">
                  <p>
                    Cantidad
                    <span className="CountPrice">{amountBurger}</span>
                  </p>
                </div>

                <div className="buttonBuy">
                  <p>
                    Price
                    <span className="CountPrice">{priceForBurger}</span>
                  </p>
                </div>
              </div>
            </div>
          </m.div>
        </m.div>
      </ContMain>
    </>
  );
};

export default CartDataOrder;
