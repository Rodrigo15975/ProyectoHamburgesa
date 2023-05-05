import styled from "styled-components";
import imgRegister from "./img/img-register.webp";
export const ContFormRegister = styled.section` 

  max-width: 120rem;  
  background-image: url(${imgRegister});
  background-position: center center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'Itim', cursive;
  padding: 0.5rem;
  .cont-title-empresa {
    text-align: center;
    padding-top: 1rem;
    h2 {
      font-size: 1.8rem;
    }
  }
  .cont-img-register {
    height: 56rem;
    background-color: black;
    border-radius: 0.8rem;
    img {
      height: 100%;
      border-radius: 0.8rem;
    }
  }
  .formRegister {
    box-shadow: rgba(0, 0, 0, 0.43) 0px -1px 6px 3px;
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
        color: rgb(120 155 255);
        font-size: 2rem;
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
      min-height: 95vh;
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
        text-align: center;
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
            rgb(168 188 255) 35%,
            rgb(176 204 255) 100%
          );
        }
      }
    }

    .txtError {
      background-color: #ff7094;
      border-radius: 0.1rem;
      color: #ffff;
      text-align: center;
 
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
      color: rgb(57 54 255);
      box-shadow: 0 0 4px rgb(89, 126, 255);
    }
    #terminos {
      border-bottom: 0.1rem solid black;
      box-shadow: none;
    }

    .form-field label {
      position: absolute;
      padding: 0.2rem;
      top: -0.9rem;
      left: 0.25rem;
      color: #9b9b9b;
      background-color: #ffff;
      pointer-events: none;
      transition: all 0.2s ease-out;
      color: rgb(0 0 0);
      border-radius: 0.1rem;
    }
    .input-register {
      color: rgba(89, 156, 255, 1);
      position: relative;
    }
    .register-label {
      color: rgb(0 0 0);
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
