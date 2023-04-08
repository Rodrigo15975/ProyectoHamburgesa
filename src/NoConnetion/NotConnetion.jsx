import React from "react";
import icon from "./[removal.ai]_tmp-642b52663b253.png";
import styled from "styled-components";

import { motion } from "framer-motion";

const ContConnetion = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 120rem;
  min-height: 100vh;
  text-align: center;
  gap: 0.5rem;
  padding: 1.5rem;
  .cont-img {
    position: relative;
    img {
      height: 10rem;
    }
  }
  h2 {
    font-size: 1.5rem;
  }
  button {
    width: 15rem;
    height: 2rem;
    background: #4e5048;
    color: #f1f0f0;
  }
  li{
    font-size: 1.08rem;
  }
`;

const NotConnetion = () => {
  return (
    <>
      <article>
        <ContConnetion>
          <h2>No se ha podido establecer conexión con Internet</h2>
          <ul>
            <p>Prueba a: </p>
            <li>Comprobrar los cables de red, el moden y el router</li>
            <li>Volver a conectarte a un red Wi-Fi</li>
          </ul>
          <img src={icon} alt="burger" />
          <motion.button whileTap={{ scale:0.9 }} type="button"  onClick={()=> window.location.reload()}  >
            Reintentar
          </motion.button>
        </ContConnetion>
      </article>
    </>
  );
};

export default NotConnetion;
