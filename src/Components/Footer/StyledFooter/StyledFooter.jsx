import styled from "styled-components";
import media from "styled-media-query";

export const ContMainFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  max-width: 120rem;
  min-height: 30rem;
  justify-content: center;
  padding: 0 2rem 0 2rem;
  background-color: rgb(255 178 62 / 4%);
  .FooterInfo {
    flex: 0 1 100rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .MainFooter {
      flex: 0 1 80rem;
      min-height: 20rem;
      display: flex;
      justify-content: center;

      .ContInfoFooter {
        display: flex;
        flex: 0 1 30rem;
        justify-content: space-evenly;
        align-items: center;

        .ContTxtBraun {
          padding: 0.3rem;
          display: flex;
          max-width: 22rem;
          height: 10rem;
          margin-right: 1rem;
          flex-direction: column;
          gap: 1rem;
          .TitleFooter {
            p {
              font-family: Kreon;
              font-size: var(--step-0);
            }
          }
        }

        .contAbout {
          display: flex;
          flex-direction: column;
          width: 10rem;
          height: 10rem;
          justify-content: space-evenly;
          .About {
            p {
              font-weight: bolder;
              font-family: Kreon;
              font-size: 1.1rem;
            }
          }
          .AboutTxt {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
        }

        .ContPrivacy {
          display: flex;
          width: 10rem;
          height: 10rem;
          flex-direction: column;
          justify-content: space-evenly;
          .Privacy {
            p {
              font-family: Kreon;
              font-weight: bolder;
              font-size: 1.1rem;
            }
          }
          .TxtPrivacy {
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
          }
          ${media.lessThan("30rem")`   
       
            width: 15rem;
          `};
        }
        .ContContactsFooter {
          display: flex;
          flex-direction: column;
          width: 15rem;
          min-height: 10rem;
          justify-content: space-evenly;
          .ContactUs {
            p {
              font-family: Kreon;
              font-weight: bolder;
              font-size: 1.1rem;
            }
          }
          .ConctRedes {
            display: flex;
            justify-content: space-evenly;
            a {
              svg {
                font-size: 2em;
              }
              .footerFB {
                color: rgb(78 83 255);
              }
              .footerIM {
                color: rgb(255 70 164);
              }
              .footerWS {
                color: rgb(38 255 155);
              }
              .footerTwitter {
                color: #167ac6;
              }
            }
          }
        }
        .txtFooter {
          color: #b0acac;
          font-family: Kreon;
          max-width: 20rem;
        }

        ${media.lessThan("57.875rem")`    
    
        justify-content:start;
        
        `};

        ${media.lessThan("48rem")` 
        justify-content:space-between;
        
        `};
        ${media.lessThan("30rem")`          
          flex-wrap:wrap;
           justify-content:start;
         `};
      }

      ${media.lessThan("57.875rem")`   
       
      flex-wrap:wrap;
       `};

      ${media.lessThan("30rem")`   
       
      flex-wrap:wrap;
      justify-content:start;
       `};
    }
  }

  .ConteinerTerminosFooter {
    flex: 0 1 100%;
    display: flex;
    border-top: 0.1rem solid #b0acac;
    padding-top: 1rem;
    justify-content: center;
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
   
    margin-bottom: 5rem;
  `};
`;
