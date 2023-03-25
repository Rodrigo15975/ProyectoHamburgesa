import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import { m} from "framer-motion";
export const Conteiner = styled.aside`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0002;
  z-index: 2000;
`;

export const ConteinerModal = styled.div`
  background-color: ${({ bg }) => bg};
  flex: 0 1 ${({ width }) => `${width}rem`};
  min-height: ${({ height }) => `${height}rem`};
  border-radius: 1rem;
  padding: 2rem;

  .subConteiner {
    width: 100%;
    height: 10rem;
    display: flex;
    position: relative;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    h2 {
      font-size: 1.5rem;
      color: #646464;
    }
    p {
      font-size: 1.3rem;
      color: rgb(255 25 99);
      text-shadow: 0 0 2px ;
    }
  }
  .absolute {
    position: absolute;
    font-size: 3rem;
    right: -1rem;
    bottom: -1rem;
  }
  .exitClose {
    position: absolute;
    top: -1rem;
    right: -1rem;
    font-size: 2.5rem;
    color: rgb(255 25 99);
  }
`;

const ModalMgs = ({ height, bg, width, title, txt, children, FunctionExit, OpeModal }) => {
  return (
    <>
      <Conteiner>
        <ConteinerModal height={height} bg={bg} width={width}>
          <div className="subConteiner">
            <h2>{title}</h2>
            <p>{txt}</p>
            <m.span className="exitClose" whileHover={{scale: 0.8}}  onClick={FunctionExit} Open={OpeModal} >
              <AiFillCloseCircle  />
            </m.span>
            <div className="cont-icon">

            {children}
            
            </div>
          </div>
        </ConteinerModal>
      </Conteiner>
    </>
  );
};

export default ModalMgs;
