import React, { useState, useEffect } from "react";
import { ConteinerForm } from "./StyledLogin";
import {
  AiOutlineGoogle,
  AiOutlineTwitter,
  BiMessageError,
  CiLogin,
  FaFacebookF,
  MdAlternateEmail,
  RiLockPasswordLine,
} from "react-icons/all";
import { m, domAnimation, LazyMotion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import bg from "./img/group-9.webp";
import { Field, Form, Formik } from "formik";
import { LoginValidationSchena } from "./ValidationLogin";
import { Google, auth } from "../../Firebase/KeyFirebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import ModalMgs from "../ModalMgs/ModalMgs";

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

const loginFormVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      type: "twenty",
      delay: 0,
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

const initialLogin = {
  email: "",
  password: "",
};

const getFieldClass = (touched, errors, name) => {
  if (touched[name] && errors[name]) {
    return "form-field error";
  } else if (touched[name] && !errors[name]) {
    return "form-field value";
  } else {
    return "form-field";
  }
};

const LoginForm = ({
  title,  
  textLogin,
  setLoadingState,
  setTokenUser,
}) => {
  const [isverifiedEmail, setIsverifiedEmail] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    const { email, password } = data;

    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      const dataLogin = userLogin.user;
      if (dataLogin.emailVerified) {
        const tokenAcces = dataLogin.accessToken;
        sessionStorage.setItem("token", tokenAcces);
        sessionStorage.setItem("username", dataLogin.displayName );
        onAuthStateChanged(auth, (user) =>
          user
            ? (navigate("/home"), setTokenUser(user))
            : setTokenUser(null)
        );
        return;
      }
      setIsverifiedEmail(false);
      return;
    } catch (error) {
      console.log(error);
    }
  };
  //Cerrar isverifiedEmmail
  const closeModalEmail = () => setIsverifiedEmail(true);
  //----------

  // Login Google
  const loginGoogle = async () => {
    try {
     const userGoogle = await signInWithPopup(auth, Google);
     console.log(userGoogle.user);
    } catch (error) {
      console.log(error);
    }
  }
  
  // ----------

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 2000);

    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
  }, []);

  return (
    <>
      <LazyMotion features={domAnimation}>
        <m.article
          variants={loginFormVariants}
          initial="hidden"
          animate="visible"
          exit={"exit"}
        >
          {isverifiedEmail === false && (
            <ModalMgs
              OpeModal={isverifiedEmail}
              title={"Verifique su email por favor"}
              txt="Revise en su correo no deseado"
              height={15}
              width={15}
              FunctionExit={closeModalEmail}
              bg={"#ffff"}
            >
              <BiMessageError className="absolute" />
            </ModalMgs>
          )}

          <ConteinerForm>
            <m.div className="cont-imgForm" layout="position">
              <img className="img" src={bg} alt="Portada" />
            </m.div>
            <Formik
              onSubmit={handleLogin}
              initialValues={initialLogin}
              validationSchema={LoginValidationSchena}
            >
              {({ handleSubmit, getFieldProps, touched, errors }) => (
                <Form className="form">
                  <div className="contDataForm">
                    <div className="contBtnRegister">
                      <m.span
                        variants={botonVariants}
                        initial="rest"
                        whileTap="tap"
                      >
                        <NavLink className={"register-link"} to={"/register"}>
                          <m.span>Register </m.span>
                        </NavLink>
                      </m.span>
                    </div>
                    <div className="contLogin">
                      <div className="titleForm">
                        <h3>{title}</h3>
                        <p>{textLogin}</p>
                      </div>

                      <div className="contInputsDatas">
                        <div
                          className={getFieldClass(touched, errors, "email")}
                        >
                          <label htmlFor="email">Email</label>
                          <Field
                            {...getFieldProps("email")}
                            type="text"
                            name="email"
                            id="email"
                          />
                          <MdAlternateEmail className="icon-login" />
                          <div>
                            {touched.email && errors.email && (
                              <div className="txtError">{errors.email}</div>
                            )}
                          </div>
                        </div>

                        <div
                          className={getFieldClass(touched, errors, "password")}
                        >
                          <label htmlFor="password">Password</label>
                          <Field
                            {...getFieldProps("password")}
                            type="password"
                            name="password"
                            id="password"
                          />
                          <RiLockPasswordLine className="icon-login" />
                          <div>
                            {touched.password && errors.password && (
                              <div className="txtError">{errors.password}</div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="contPasswordAndBox">
                        <div className="contCheck">
                          <input
                            id="remember"
                            name="remember"
                            type="checkbox"
                          />
                          <label htmlFor="remember">Remember me</label>
                        </div>
                        <div className="contPasswordRecoll">
                          <p>Forgot password</p>
                        </div>
                      </div>
                      <div className="contButtonLogin">
                        <m.button
                          type="submit"
                          variants={botonVariants}
                          initial="rest"
                          whileTap="tap"
                          onClick={handleSubmit}
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
                        whileTap={"tap"}
                        className="fb"
                        type="button"
                      >
                        <FaFacebookF /> Login with Facebook
                      </m.button>

                      <m.button
                        variants={botonVariants}
                        initial="rest"
                        whileTap="tap"
                        className="google"
                        type="button"
                        onClick={loginGoogle}
                      >
                        <AiOutlineGoogle /> Login with Google
                      </m.button>

                      <m.button
                        variants={botonVariants}
                        initial="rest"
                        whileTap="tap"
                        className="twitter"
                        type="button"
                      >
                        <AiOutlineTwitter /> Login with Twitter
                      </m.button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </ConteinerForm>
        </m.article>
      </LazyMotion>
    </>
  );
};

export default LoginForm;
