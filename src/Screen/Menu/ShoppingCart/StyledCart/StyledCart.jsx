import styled from "styled-components";

import media from "styled-media-query";

//No data Cart Styled

import bgNotData from "../img/side-wave_background.png";

export const ContNotData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-family: Itim, cursive;
  background-image: url(${bgNotData});
  .title-notProduct {
    font-size: var(--step-0);
    text-align: center;
    svg {
      font-size: var(--step-3);
      color: red;
    }
  }

  
`;

//---------------

export const MainCart = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(36 36 36 / 54%);
  z-index: 30000;
`;

export const ContCart = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background-color: #fff;
  height: 100%;
  width: 40rem;
  
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  .data {
    position: relative;
    width: 100%;
    height: 100%;

    .buttonCloseCart {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--step-3);
    }
    .buttonBuyOrder {
      background-color: rgb(255 162 66);
      font-family: Itim, cursive;
      min-height: 3rem;
      margin-top: 1rem;
      bottom: 0.2rem;
      color: #fff;
      font-size: var(--step-0);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem 0 1rem;
      svg {
        font-size: var(--step-2);
      }
    }
  }

  .contBuyBtn {
    padding: 0.9rem;
    button {
      .span-buy {
        display: flex;
        align-items: center;
      }
    }
  }

  ${media.lessThan("48rem")`    
    
  width: 100%;
   `};

`;

