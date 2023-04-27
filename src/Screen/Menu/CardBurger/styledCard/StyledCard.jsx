import styled from "styled-components";
import media from "styled-media-query";
export const ContTitleCard = styled.section`
  max-width: 120rem;
  min-height: 5rem;
  display: flex;
  flex-wrap: wrap;
  font-family: Itim, cursive;
  margin-bottom: 5rem;
  .card-title {
    flex: 0 1 100%;
    text-align: center;
    h1 {
      font-size: var(--step-6);
      background: linear-gradient(to right, rgba(255, 185, 138, 1) 28%, #ffd700);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      font-size: var(--step-0);
    }
  }

`;

export const ContMainCard = styled.section`
  max-width: 100rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .ContCards {
    flex: 0 1 100rem;
    display: flex;
    background-color: white;
    justify-content: center;
    gap: 0.7rem;
    padding: 1rem;
    .Cards {
      display: flex;
      flex-direction: column;
      flex: 0 1 45rem;
      gap: 0.7rem;
    }

    ${media.lessThan("64rem")`            
        
          flex-wrap: wrap;
     `};
  }
`;

export const CardsBurger = styled.div`
  max-width: 45rem;
  min-height: 18rem;
  padding: 0.5rem;
  display: flex;
  border-radius: 0.5rem;
  justify-content: center;
  border: 0.1rem solid #FFD700;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  .data-burger {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex: 0 1 23rem;

    .data {
      flex: 0 1 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .hamburger-title {
        p {
          font-family: Itim, cursive;
          font-size: var(--step-2);
          font-weight: bolder;
          color: transparent;
          background: rgb(255, 185, 138);
          background: linear-gradient(
            90deg,
            rgba(255, 185, 138, 1) 28%,
            rgba(255, 141, 93, 1) 79%
          );
          -webkit-background-clip: text;
          -moz-background-clip: text;
          background-clip: text;
        }
      }
      .hamburger-description {
        p {
          font-size: 1.1rem;
          color: #a4a2a2;
          max-width: 22rem;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;

          ${media.lessThan("43.125rem")`         
         
            flex: 1 1 100%;
          `};
        }

        ${media.lessThan("43.125rem")`          
         
          display: flex;
          justify-content: center       ; 
          
          `};
      }
      .button-order {
        width: 100%;

        button {
          background: rgb(255, 209, 134);
          background: linear-gradient(
            90deg,
            rgba(255, 209, 134, 1) 28%,
            rgba(255, 205, 111, 1) 79%
          );
          font-size: 1.2rem;
          color: #fff;
          width: 90%;
          height: 3.5rem;
          border-radius: 2rem;
          font-family: Itim, cursive;
          display: flex;
          align-items: center;
          justify-content: center;
          .iconOrder {
            font-size: 2rem;
          }

          ${media.lessThan("43.125rem")`            
          width: 100%;
        `};
        }
      }
      .hamburger-price {
        p {
          font-size: var(--step-1);
          color: #ff9472;
          font-weight: bolder;
        }
      }

      :nth-child(even) {
        text-align: center;
      }
    }

    ${media.lessThan("43.125rem")`            
      flex: 0 1 100%;
      height: 17rem;
      text-align:center;   
    `};

    
  }

  .burger-img {
    flex: 0 1 17rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
  }

  ${media.lessThan("64rem")`            
        
    flex-wrap: wrap;
    //forma de solu
    justify-content: space-evenly;  
    :nth-child(even) {
     flex-direction: row-reverse;
     
    }
    
   
  `};

  transition: transform 0.1s linear , box-shadow 0.1s linear;
  
  &:hover{
    box-shadow: 0 8px 3px rgb(255, 215, 0, .2);;
    transform: translateY(-3px);
  }
`;
