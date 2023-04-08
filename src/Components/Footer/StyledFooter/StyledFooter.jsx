import styled from "styled-components";
import media from "styled-media-query";

export const ContMainFooter = styled.footer`
  display: flex;
  flex-direction: column;
  min-height: 30rem;
  justify-content: center;
  padding: 0 2rem 0 2rem;
  background-color: rgb(255 178 62 / 12%);
  .ConteinerInfoFooter {
    flex: 0 1 20rem;
    display: flex;
    justify-content: space-evenly;

    .MainInfoFooter {
      flex: 0 1 40rem;
      display: flex;
      justify-content: space-evenly;

      .ContInfoExtra {
        width: 10rem;
        display: flex;
        flex-direction: column;
        height: 10rem;
        justify-content: space-evenly;
        .contAbout {
          p {
            font-family: "Kreon", serif;
            font-size: 1.2rem;
          }
        }
        .Extra {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 7rem;
          p {
            color: #b0acac;
          }
        }

        ${media.lessThan("30rem")`       
          text-align:center;
          width: 100%;
          align-content:center;
        `};
      }

      .InfoFooter {
        display: flex;
        flex-direction: column;
        flex: 0 1 20rem;
        align-items: center;

        .Info {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          p {
            font-family: "Kreon", serif;
            font-size: 1.2rem;
          }
        }
        .TxtInfo {
          p {
            color: #b0acac;
          }
        }

        ${media.lessThan("30rem")`       
      
        .Info{
          justify-content:center;  
        }
        .TxtInfo{
          text-align:center;
          p{
            padding: 0.5rem;
          }
        }

        .ContInfoExtra{
          width: 100%;
        }
        
      `};
      }

      ${media.lessThan("30rem")`       
       flex-wrap:wrap;   
      `};
    }

    .MainPrivacys {
      display: flex;
      flex: 0 1 30rem;
      justify-content: space-between;
      .ContInfoPrivacys {
        width: 5rem;
        display: flex;
        flex-direction: column;
        height: 7rem;
        justify-content: space-evenly;
        .PrivacyInfo {
          p {
            font-family: "Kreon", serif;
            font-size: 1.2rem;
          }
        }

        .PolicyTerms {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          p {
            color: #b0acac;
          }
         
        }

        ${media.lessThan("30rem")`       
        width: 100%;
        align-items: center;
        `};
      }

      .ContContactsFooter {
        display: flex;
        flex-direction: column;
        height: 8rem;
        justify-content: space-evenly;
        .contactUs {
          font-family: "Kreon", serif;
          font-size: 1.2rem;
        }
        .number {
          p {
            color: #b0acac;
          }
        }
        .gmail {
          color: #b0acac;
        }
        .ContredesFooters {
          display: flex;
          align-items: center;
          justify-content: space-between;
          a {
            display: flex;
            svg {
              font-size: 2rem;
            }
          }
          .footerFB {
            color: rgb(49 84 255);
          }
          .footerIM {
            color: rgb(225 82 142);
          }
          .footerWS {
            color: green;
          }
          .footerTwitter {
            color: #147dff;
          }
        }
      }

      ${media.lessThan("30rem")`       
    flex-wrap:wrap;   
    justify-content:center;
    text-align:center;
  `};
    }

    ${media.lessThan("57.875rem")`       
    flex-wrap:wrap;   
  `};
  }
  .ConteinerTerminosFooter {
    flex: 0 1 5rem;
    display: flex;
    border-top: 0.1rem solid #b0acac;
    padding-top: 1rem;
    justify-content: space-between;
    .contCopy {
      display: flex;
      align-items: center;
      p {
        color: #b0acac;
      }
    }
    .contTerms {
      display: flex;
      width: 10rem;
      justify-content: space-evenly;
      align-items: center;
      p {
        color: #b0acac;
      }
    }

    ${media.lessThan("30rem")`       
    flex-wrap:wrap;   
    justify-content:center;
    text-align:center;
  `};
  }

  ${media.lessThan("57.875rem")`       
   
    margin-bottom: 4rem;
  `};
`;
