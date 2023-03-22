import styled from "styled-components";

export const ContFormRegister = styled.form`
  max-width: 120rem;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5) 30%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("https://static-sevilla.abc.es/media/gurmesevilla/2014/10/hamburguesas.jpg");
  background-attachment: fixed;
  /* background-size: cover; */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .ContTitleForm {
    font-size: 2rem;
    color: rgb(0 0 0 / 63%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin-bottom: 1rem;
  }
  .ContMainDataInput {
    box-shadow: -11px -1px 6px 3px rgba(0,0,0,0.43);
-webkit-box-shadow: -11px -1px 6px 3px rgba(0,0,0,0.43);
-moz-box-shadow: -11px -1px 6px 3px rgba(0,0,0,0.43);
    flex: 0 1 30rem;
    min-height: 90vh;
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0 6rem 0;
    border-radius: 0.5rem;
    .BackLogin {
      position: absolute;
      right: 2rem;
      top: 2rem;
      font-size: 2.5rem;
      svg {
        color: #0007;
      }
    }

    .ContInputs {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-content: center;

      width: 75%;
      .DataInputs {
        width: 100%;
        height: 100%;
        position: relative;        
        
        .contSexo {
          margin-top: 1.5rem;
          width: 100%;
          span {
            padding: 0.5rem;
          }
          select {
            padding: 0.5rem;
            width: 100%;

            outline: none;
            border-color: rgb(203, 212, 251);
            color: rgb(203, 212, 251);
          }
        }
        svg {
          position: absolute;
          font-size: 1.6rem;
          z-index: 1;
          color: rgb(0, 0, 0, 0.63);
        }
        .userIcon {
          top: 1.3rem;
          right: 2rem;
        }
        .emailIcon {
          top: 6rem;
          right: 2rem;
        }
        .passwordIcon {
          top: 11rem;
          right: 2rem;
        }
        .RepasswordIcon {
          top: 15.8rem;
          right: 2rem;
        }
        .InputsGap {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          input {
            border-radius: 0.5rem;
            box-shadow: -5px 0px 1px rgb(203, 212, 251);
            border-color: rgb(203, 212, 251);
            transition: box-shadow 0.4s linear;
            &:hover {
              box-shadow: none;
            }
            .iconUsername {
              position: absolute;
            }
          }

          label {
            color: rgb(203, 212, 251);
            cursor: pointer;
          }
        }
        .date{
          width: 100%;
          height: 2rem;
        }

      
      }
    }

    .ContButtonRegisterAndTerms {
      margin: 2rem 0 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .ContTermins {
        display: flex;
        text-align: center;
        input {
          height: 1.2rem;
          width: 1.2rem;
        }
      }

      .ContBtnRegister {
        height: 3rem;
        button {
          background: rgb(203, 212, 251);
          background: linear-gradient(
            90deg,
            rgb(0 0 0 / 62%) 25%,
            rgb(0 0 0 / 62%) 72%
          );
          font-size: 1.2rem;
        }
      }
    }
  }
`;
