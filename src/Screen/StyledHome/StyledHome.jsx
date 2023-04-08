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

export const MainHome = styled.main`
  position: relative;
  min-height: 90vh;
  max-width: 120rem;
  display: flex;

  .contDataBurger {
    flex: 0 1 120rem;
    display: flex;
    justify-content: center;
    .contBurger {
      flex: 0 1 40rem;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .contHamburger {
        max-width: 27rem;
        // Pantalla de 768px ;
        ${media.lessThan("57.875rem")`       
                 margin-top: 3rem;
                 
        `};
        ${media.lessThan("30rem")`       
          max-width: 20rem;
          margin-bottom: 2rem;
        `};
      }

      .contTxtRedBtn {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 20rem;
        p {
          max-width: 23rem;
          font-size: var(--step--1);
          font-family: "Merriweather", serif;
          color: #646363;

          ${media.lessThan("30rem")`       
          max-width: 20rem;
        `};
        }
        .contBtn {
          width: 19rem;
          button {
            background-color: #ffb877;
            height: 4rem;
            width: 100%;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
              font-size: 1.7rem;
            }
          }
        }
        .contRedes {
          img {
            max-width: 4rem;
          }
        }
      }
    }
    .contBurgersPrices {
      flex: 0 1 40rem;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      padding: 0.5rem;
      .contClassicBurger {
        max-width: 30rem;

        // Pantalla de 768px ;
      ${media.lessThan("57.875rem")`       
       margin-bottom: 5rem;
       max-width: 33rem;
        `};
      }
      .contCardBurger {
        display: flex;
        justify-content: space-evenly;
        .contBurgerEspecial {
          flex: 0 1 17rem;
          background-color: #ffd495;
          border-radius: 1rem;
          display: flex;
          padding: 1rem;
          text-align: center;
          flex-direction: column;
          justify-content: space-evenly;
          position: relative;

          &::before {
            position: absolute;
            content: "";
            height: 4rem;
            width: 4rem;
            background-color: #ff9e44;
            top: -3rem;
            right: 0;
            clip-path: circle();
          }
          &::after {
            position: absolute;
            content: "$4.59";
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-family: "Roboto Slab", serif;
            font-weight: bolder;
            height: 4rem;
            width: 4rem;
            background-color: #ff8282;
            top: -3rem;
            right: -0.4rem;
            clip-path: circle();
          }

          .burgerEspecial {
            flex: 0 1 4rem;
            p {
              color: #ffffff;
              font-size: 1.5rem;
              font-family: "Roboto Slab", serif;
              font-weight: bolder;
              text-decoration: underline;
            }
            img {
              max-width: 14rem;
            }
            button {
              background-color: #ffff;
              color: rgb(255 118 130);
              height: 3rem;
              width: 15rem;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top:0.5rem;
              svg {
                font-size: 1.4rem;
              }
            }
          }
        }

        //Pantalla de 1200px;
        ${media.lessThan("75rem")`       
          gap: 1rem;
        `};

        // Pantalla de 926px ;
        ${media.lessThan("57.875rem")`       
          flex-wrap: wrap;          
          margin-bottom: 4rem;
        `};
      }
      //Pantalla de 1200px;
      ${media.lessThan("75rem")`
        align-items: center;    
      `};

      // Pantalla de 768px ;
      ${media.lessThan("57.875rem")`       
       margin-top: 5rem;
        `};
    }
    // Pantalla de 926px ;
    ${media.lessThan("57.875rem")`       
    flex-wrap: wrap;          
  `};
  }
`;
