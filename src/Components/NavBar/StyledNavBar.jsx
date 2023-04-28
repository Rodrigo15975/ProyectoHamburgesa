import styled from "styled-components";
import media from "styled-media-query";

// --step--2: clamp(0.91rem, calc(0.90rem + 0.05vw), 0.96rem);
//   --step--1: clamp(1.09rem, calc(1.07rem + 0.11vw), 1.20rem);
//   --step-0: clamp(1.31rem, calc(1.28rem + 0.19vw), 1.50rem);
//   --step-1: clamp(1.58rem, calc(1.52rem + 0.30vw), 1.88rem);
//   --step-2: clamp(1.89rem, calc(1.80rem + 0.45vw), 2.34rem);
//   --step-3: clamp(2.27rem, calc(2.14rem + 0.66vw), 2.93rem);
//   --step-4: clamp(2.72rem, calc(2.53rem + 0.94vw), 3.66rem);
//   --step-5: clamp(3.27rem, calc(3.00rem + 1.31vw), 4.58rem);
//   --step-6: clamp(3.92rem, calc(3.56rem + 1.80vw), 5.72rem);
//   --step-7: clamp(4.70rem, calc(4.21rem + 2.44vw), 7.15rem);
//   --step-8: clamp(5.64rem, calc(4.99rem + 3.29vw), 8.94rem);
//   --step-9: clamp(6.77rem, calc(5.89rem + 4.39vw), 11.18rem);
//   --step-10: clamp(8.13rem, calc(6.96rem + 5.83vw), 13.97rem);

export const NavHome = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  background: linear-gradient(to right, rgb(255 192 167), rgb(255, 218, 185));
`;

export const ContMainHome = styled.div`
  flex: 0 1 100%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;

export const ContLogo = styled.div`
  flex: 0 1 20rem;
  display: flex;
  align-items: center;
  align-content: center;

  img {
    max-width: 3rem;
  }
  p {
    font-size: var(--step-1);
    color: #fff;
    font-family: "Lobster Two", cursive;
  }

  ${media.lessThan("57.875rem")`       
    justify-content:center;       

    p{
      font-size: 2.5rem;
    }
  `};
`;

export const ContNav = styled.div`
  flex: 0 1 20rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: background-color 0.2s linear;

  a {
    font-weight: 100;
    font-size: var(--step--1);

    color: #726c6d;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 1.8rem;
      padding-right: 0.2rem;
    }
    padding: 0.5rem;

    .iconContact {
      background-color: #fff;
      border-radius: 0.5rem;
    }
    .iconMenu {
      margin-left: 0.5rem;
    }
    transition: background-color 0.2s linear;
  }

  .active {
    border-radius: 0.4rem;
    background-color: #fff;
  }
  ${media.lessThan("57.875rem")`       
    display: none;         
  `};
`;
export const ContUser = styled.div`
  flex: 0 1 25rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  p {
    font-size: var(--step--1);
    font-family: "Lobster Two", cursive;

    font-weight: 100;
    color: #fff;
    text-align: center;
    font-family: "Roboto Slab", serif;
  }
  img {
    max-width: 4rem;
    cursor: pointer;
  }

  ${media.lessThan("57.875rem")`       
    display: none;         
  `};
`;

export const NavMobile = styled.div`
  display: none;

  ${media.lessThan("57.875rem")`       
    display: block;
    .contNavMobile {
      position: fixed;
      bottom: 0;
      width: 100%;
      min-height: 4rem;
      z-index: 9999;
      background-color: #ffb23e;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5 0 0 0.5rem;

      .linkMobiles {
        flex: 0 1 25rem;
        display: flex;
        justify-content: space-evenly;
        img {
          height: 3.5rem;
          width: 3.5rem;
        }
        .menuBurger {
          height: 3rem;
        }
        a {
          border-radius: 0.5rem;
          transition: background-color 0.2s linear;
          display: flex;
          align-items:center;
        }
      }
    }
    .active {
      background-color: rgb(255 255 255);
    }
`};
`;
