import React from "react";
import styled from "styled-components";

const ContBtn = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonDinamic = styled.button`
  width: 100%;
  height: 100%;
`;

const Button = ({ title, claSs , onClick }) => {
  return (
    <>
      <ContBtn className={claSs} onClick={onClick}   >
        <ButtonDinamic >{title}</ButtonDinamic>
      </ContBtn>
    </>
  );
};

export default Button;
