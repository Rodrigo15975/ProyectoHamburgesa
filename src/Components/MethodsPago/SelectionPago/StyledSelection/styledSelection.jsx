import styled from "styled-components";

import bg from "./split_background.jpg";
export const ContMainPago = styled.article`
  max-width: 120rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  justify-content: center;
`;

export const MainPago = styled.section`
  flex: 0 1 45rem;
  min-height: 49rem;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  background-image: url(${bg});
  border-radius: 2rem;
  font-family: Itim, cursive;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem 0rem 1rem;

  .cont-title {
    text-align: center;
    h2 {
      font-size: var(--step-2);
      color: rgb(255 188 37);
    }
    margin-bottom: 1rem;
  }
  .cont-forma {
    .title-forma {
      margin-bottom: 1rem;
      h2 {
        font-size: var(--step--1);
      }
    }
    .method-pago {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.5rem;
      label {
        font-size: var(--step-0);
        display: flex;
        gap: 0.4rem;
      }
    }
  }

  .ContBTNPago {
    width: 100%;
    button {
      background-color: #fff;
      border: 0.1rem solid #000;
      width: 100%;
      min-height: 3rem;

      position: relative;
      &::before {
        content: "";
        position: absolute;
        height: 0%;
        width: 100%;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0;
        background-color: rgb(74 74 74 / 10%);
        transition: height 0.2s linear;
      }

      &:hover::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(74 74 74 / 10%);

        top: 0;
        left: 0;
      }
    }
  }
  .cont-back {
    button {
      background-color: rgb(36 83 255 / 78%);
      color: white;
      padding: 1rem;
    }
  }
`;
