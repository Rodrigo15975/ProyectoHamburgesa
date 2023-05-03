import React, { useState, useEffect } from "react";

import { ContMainPago, MainPago } from "./StyledSelection/styledSelection";
import { BsPaypal } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import PageTransition from "../../PageTransition/PageTransition";
import { m } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SelectionPago = () => {
  const [methodPago, setMethodPago] = useState(null);
  const Navigate = useNavigate();

  const menuBack = () => Navigate("/home/menu");

  return (
    <>
      <PageTransition>
        <ContMainPago>
          <MainPago>
            <div className="cont-title">
              <h2>Braun Burger</h2>
            </div>
            <div className="cont-forma">
              <div className="title-forma">
                <h2>Seleciona una forma de pago</h2>
              </div>

              <div className="method-pago">
                <label htmlFor="paypal">
                  <BsPaypal />
                  <input type="radio" name="pago" id="paypal" />
                  Paypal
                </label>
                <label htmlFor="visa">
                  <FaCcVisa />
                  <input type="radio" name="pago" id="visa" />
                  Visa
                </label>
              </div>
            </div>
            <div className="ContBTNPago">
              <m.button whileHover={{ scale: 0.95 }}>Continuar</m.button>
            </div>
            <div className="cont-back">
              <button onClick={menuBack}>Volver</button>
            </div>
          </MainPago>
        </ContMainPago>
      </PageTransition>
    </>
  );
};

export default SelectionPago;
