import React from "react";
import { ConteinerForm } from "./StyledLogin";
import {
  AiOutlineGoogle,
  CiLogin,
  FaFacebookF,
  FiUserCheck,
  SlSocialTwitter,
} from "react-icons/all";
import { m, domAnimation, LazyMotion } from "framer-motion";
import { TextInput } from "../InputsLabelTop/Inputs";
import { NavLink } from "react-router-dom";
const botonVariants = {
  rest: {
    color: "white",
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
  },
  tap: {
    color: "white",
    scale: 0.9,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  },
};
import bg from "./img/Group 9.png";

const loginFormVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.6,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      type: "twenty",
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "twenty",
      delay: 0.2,
    },
  },
};
const LoginForm = ({ title, img, textLogin }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.article
        variants={loginFormVariants}
        initial="hidden"
        animate="visible"
        exit={"exit"}
      >
        <ConteinerForm>
          <m.div className="cont-imgForm" layout="position">
            <img className="img" src={bg} />
          </m.div>
          
          <form className="form">
            <div className="contBtnRegister">
              <m.span variants={botonVariants} initial="rest" whileTap="tap">
                <NavLink className={"register-link"} to={"/form/register"}>
                  <m.span>Register</m.span>
                </NavLink>
              </m.span>
            </div>

            <div className="contDataForm">
              <div className="contLogin">
                <div className="titleForm">
                  <h3>{title}</h3>
                  <p>{textLogin}</p>
                </div>

                <div className="contInputsDatas">
                  <TextInput label={"Email"} type={"email"} />

                  <TextInput label={"Password"} type={"password"} />
                </div>

                <div className="contPasswordAndBox">
                  <div className="contCheck">
                    <input id="remember" name="remember" type="checkbox" />
                    <span id="remember" name="remember">
                      Remember me
                    </span>
                  </div>
                  <div className="contPasswordRecoll">
                    <p>Forgot password</p>
                  </div>
                </div>
                <div className="contButtonLogin">
                  <m.button
                    variants={botonVariants}
                    initial="rest"
                    whileTap="tap"
                    onClick={(e) => e.preventDefault()}
                  >
                    <CiLogin />
                    Sign In
                  </m.button>
                </div>
              </div>

              <div className="contButtonsLogin">
                <hr />
                <m.button
                  variants={botonVariants}
                  initial="rest"
                  whileTap="tap"
                  className="fb"
                >
                  <FaFacebookF /> Login with Facebook
                </m.button>

                <m.button
                  variants={botonVariants}
                  initial="rest"
                  whileTap="tap"
                  className="google"
                >
                  <AiOutlineGoogle /> Login with Google
                </m.button>
              </div>
            </div>
          </form>
        </ConteinerForm>
      </m.article>
    </LazyMotion>
  );
};

export default LoginForm;
