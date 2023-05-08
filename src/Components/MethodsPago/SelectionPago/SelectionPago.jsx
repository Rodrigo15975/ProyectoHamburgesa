import React, { useState, useEffect } from "react";

import { ContMainPago, MainPago } from "./StyledSelection/styledSelection";
import { BsPaypal } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import PageTransition from "../../PageTransition/PageTransition";
import { m } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const SelectionPago = () => {
  const [methodPago, setMethodPago] = useState(null);
  const [alertPay, setAlertPay] = useState(false);
  const Navigate = useNavigate();

  const menuBack = () => Navigate("/home/menu");

  const changeMethodPay = (e) => {
    const { value } = e.target;
    setMethodPago(value);
  };

  return (
    <>
      <PageTransition>
        <ContMainPago>
          <MainPago>
            <div>
              <div className="cont-title">
                <h2>Braun Burger</h2>
              </div>
              <div>
                <PayPalScriptProvider>
                  <PayPalButtons/>
                </PayPalScriptProvider>
              </div>
              <div className="cont-back">
                <button onClick={menuBack}>Volver</button>
              </div>
            </div>
          </MainPago>
        </ContMainPago>
      </PageTransition>
    </>
  );
};

export default SelectionPago;
