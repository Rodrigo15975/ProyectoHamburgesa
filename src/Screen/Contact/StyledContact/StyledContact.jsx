import styled from "styled-components";
import media from "styled-media-query";

export const ContMainContact = styled.section`
  min-height: 91vh;
  max-width: 95rem;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 0 1rem 0 1rem;
  justify-content: center;

  .ConteinerContact {
    flex: 0 1 90rem;
    min-height: 80vh;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 7rem;
    .contContact {
      flex: 0 1 30rem;
      height: 25rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .contInfo {
        h2 {
          color: #ff9900;
          font-size: var(--step-1);
          font-weight: 100;
          text-align: center;
          text-decoration: underline;
        }
        p {
          color: #838282;
          max-width: 22rem;
          margin: auto;
          padding: 1rem;
          font-size: var(--step-0);
          font-weight: 100;
        }
      }

      ${media.lessThan("57.875rem")`       
        height: 15rem;
        text-align:center;
      
        .contInfo{
          display: flex;
          justify-content: center;
          text-align: center;
          p{
            margin: 0;
            padding: 0;
            max-width: 25rem;
          }
          h2{
            margin-bottom: 1rem;
            font-size: var(--step-2);
          }
        }
    `};
    }
    .contContactImg {
      padding: 1rem 0 2rem 0;
      flex: 0 1 50rem;
      height: 50rem;
      display: flex;
      justify-content: center;
      img {
        height: 100%;
        border: 0.1rem solid black;
        object-fit: cover;
        border-radius: 0.4rem;
        ${media.lessThan("30rem")`   
          height: 30rem;
        `};
      }
    }

    .contLinkContact {
      position: absolute;
      bottom: 2rem;
      display: flex;
      width: 100%;
      justify-content: start;
      gap: 1rem;
      .linkContact {
        cursor: pointer;
        position: relative;
        flex: 0 1 18rem;
        height: 18rem;
        background-color: white;
        border: 0.1rem solid #000;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .iconContact {
          font-size: 3rem;
          border: 0.1rem solid black;
          padding: 0.2rem;
          border-radius: 0.3rem;
        }
        .ws {
          color: green;
        }
        .im {
          color: #ff1b8f;
        }
        .fb {
          color: #6e6eff;
        }
        p {
          font-weight: bolder;
        }

        ${media.lessThan("48rem")`   
        flex: 0 1 14rem;
        height: 14rem;
        `};

        ${media.lessThan("30rem")`   
        flex: 0 1 10rem;
        height: 10rem;
        `};

        a {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
        }
      }

      .contWs::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 0%;
        background-color: rgb(159, 255, 162, 0.5);
        border-radius: 1rem;
        transition: width 0.2s linear;
      }

      .contWs:hover::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background-color: rgb(159, 255, 162, 0.5);
        border-radius: 1rem;
        z-index: 0;
      }

      .Contfb::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 0%;
        background-color: rgb(51 76 255);
        border-radius: 1rem;
        transition: width 0.2s linear;
      }

      .Contfb:hover::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background-color: rgb(51 76 255);
        border-radius: 1rem;
        z-index: 0;
      }

      .Contim::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 0%;
        background-color: rgb(255 130 182);
        border-radius: 1rem;
        transition: width 0.2s linear;
      }

      .Contim:hover::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background-color: rgb(255 151 151);
        border-radius: 1rem;
        z-index: 0;
      }

      ${media.lessThan("48rem")`   
     
        justify-content:center;
      
        `};
    }

    ${media.lessThan("57.875rem")`   
        margin-bottom:2.5rem;
      flex-wrap:wrap;
    `};
  }
`;
