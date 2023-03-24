import styled from "styled-components";

export const ContFormRegister = styled.section`
  max-width: 120rem;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.1) 30%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url("https://static-sevilla.abc.es/media/gurmesevilla/2014/10/hamburguesas.jpg");
  background-attachment: fixed;
  /* background-size: cover; */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .cont-title-empresa {
    text-align: center;
    padding-top: 1rem;
    h2 {
      font-size: 1.8rem;
    }
  }
  .formRegister {
    box-shadow: rgba(0, 0, 0, 0.43) -11px -1px 6px 3px;
    flex: 0 1 30rem;
    background-color: white;
    min-height: 80vh;
    border-radius: 0.8rem;
    position: relative;
    display: flex;
    flex-direction: column;
    .cont-title-register {
      display: flex;
      justify-content: center;

      h2 {
        color: #264653;
        font-size: 2rem;
        text-shadow: 0 0 3px #264653;
      }
    }
    .close-register {
      position: absolute;
      right: 2rem;
      top: 2rem;
      font-size: 1.6rem;  
    }
    .cont-inputsData {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 80vh;
      padding: 3.5rem;
      gap: 2rem;
      .cont-genero {
        select {
          width: 100%;
          border-color: rgba(89, 126, 255, 1);
          color: " rgba(89,156,255,1)";
        }
      }

      .cont-date {
        height: 4rem;
        #date-of-birth {
          height: 2rem;
          color: rgba(89, 156, 255, 1);
        }
      }

      .cont-terminos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        #terminos {
          width: 3rem;
        }
      }
      .cont-btnRegister {
        height: 3rem;
        button {
          height: 100%;
          width: 100%;
          color: white;
          outline: none;
          font-size: 1.1rem;
          background: rgb(89, 126, 255);
          background: linear-gradient(
            90deg,
            rgba(89, 126, 255, 1) 35%,
            rgba(116, 165, 255, 1) 100%
          );
        }
      }
    }

    .txtError {
      background-color: #ff7094;
      border-radius: 0.1rem;
      color: #ffff;
      text-align: center;
      font-size: 0.8rem;
      padding: 0.2rem;
      border-radius: 0.2rem;
    }

    .form-field {
      position: relative;
      height: 2.5rem;
    }

    input {
      width: 100%;
      height: 100%;
      padding-top: 0.4rem;
      padding-left: 1rem;
      outline: none;
      border: 0.1rem solid rgba(89, 126, 255, 0.01);
      border-radius: 0.2rem;
      color: rgb(88 88 88);
      box-shadow: 0 0 4px rgb(89, 126, 255);
    }
    #terminos {
      border-bottom: 0.1rem solid black;
      box-shadow: none;
    }

    .form-field label {
      position: absolute;
      padding: 0.2rem;
      top: -0.7rem;
      left: 0.25rem;
      font-size: 0.9rem;
      color: #9b9b9b;
      background-color: rgb(89, 126, 255);
      pointer-events: none;
      transition: all 0.2s ease-out;
      color: #ffff;
      border-radius: 0.1rem;
    }
    .input-register {
      color: rgba(89, 156, 255, 1);
      position: relative;
    }
    .register-label {
      color: rgb(89, 126, 255);
    }

    .icon-register {
      position: absolute;
      right: 1rem;
      top: 0.5rem;
      font-size: 1.2rem;
      color: rgb(89, 126, 255);
    }
  }
`;
