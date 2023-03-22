import styled from "styled-components";
import { pxToRem } from "styled-media-query";
import media from "styled-media-query";


export const ConteinerForm = styled.article`
  max-width: 120rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: relative;

  ${media.lessThan("57.75rem")`
  flex-wrap: wrap;
 
 `};

  .contBtnRegister {
    position: absolute;
    right: .5rem;
    top: .5rem;
    width: 15rem;
    height: 3rem;
    display: flex;

    span {
      width: 100%;
      height: 100%;
      background: #a62639;
      border-radius: 0.5rem;
      transition: background 0.3s linear;
      &:hover {
        background: rgb(174, 219, 238);
      }
    }
    .register-link {
      width: 100%;
      height: 100%;
      color: white;
      span {
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .form {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 1 40rem;
    position: relative;
    ${media.lessThan("57.75rem")`
    flex: 0 1 60rem;
    min-height: 100vh;
   `};

    .contDataForm {
      min-height: 47rem;
      flex: 0 1 25rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .contLogin {
        flex: 0 1 24rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .titleForm {
          margin-top: 0.5rem;
          margin-bottom: 3.5rem;
          h3 {
            font-size: 1.6rem;
            color: #0000006b;
          }
        }
        .contInputsDatas {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          input {
            height: 4rem;
            padding-left: 1rem;
            border: none;
            outline: none;
            border: 0.1rem solid #0002;
            border-radius: 0.3rem;
          }
        }
        .contPasswordAndBox {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
          .contCheck {
            input {
              width: 1rem;
              height: 1rem;
            }
            span {
              color: #0008;
              padding-left: 0.2rem;
              margin-bottom: 0.4rem;
            }
          }
        }
        .contButtonLogin {
          button {
            width: 100%;
            margin-top: 4rem;
            height: 2.7rem;
            background-color: #a62639;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.2rem;
          }

          svg {
            font-size: 1.2rem;
          }
        }
      }

      .contButtonsLogin {
        flex: 0 1 20rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;

        button {
          width: 100%;
          height: 2.5rem;
          background-color: #49b6ff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          outline: none;
          svg {
            font-size: 1.3rem;
            margin-right: 0.3rem;
          }
        }
        .google {
          background-color: #e25c3e;
        }
        .fb {
          background-color: #2b5fc4;
        }
      }

      .contPasswordRecoll {
        text-decoration: underline;
        cursor: pointer;
        color: #a62639;
      }
    }
  }

  .cont-imgForm {
    display: flex;
    flex: 0 1 67%;
    justify-content: center;
    align-items: center;
    height: 58.8rem;
    flex-direction: column;

    ${media.lessThan("57.75rem")`
      flex: 0 1 100%;
    
    `};

    .img {
      /* height: 59rem;
      object-position: left center; */
      /* object-fit: cover; */
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center left;
      aspect-ratio: 16/9;
     

      ${media.lessThan("64rem")`
          
          object-position: center right;
      `};


      ${media.lessThan("57.75rem")`          
          object-position: center left;
      `};

    }


  }
`;
