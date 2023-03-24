import React, { useState, useEffect } from "react";
import { ConteinerForm } from "./StyledLogin";
import {
  AiOutlineGoogle,
  AiOutlineTwitter,
  CiLogin,
  FaFacebookF,
  MdAlternateEmail,
  RiLockPasswordLine,
} from "react-icons/all";
import { m, domAnimation, LazyMotion } from "framer-motion";
import { NavLink } from "react-router-dom";
import bg from "./img/Group 9.png";
import { Field, Form, Formik } from "formik";
import { LoginValidationSchena } from "./ValidationLogin";

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
  const initialLogin = {
    email: "",
    password: "",
  };

  const [inputFocus, setInputFocus] = useState({
    username: false,
    password: false,
    email: false,
  });

  const getFieldClass = (touched, errors, name) => {
    if (touched[name] && errors[name]) {
      return "form-field error";
    } else if (touched[name] && !errors[name]) {
      return "form-field value";
    } else {
      return "form-field";
    }
    return;
  };
  const handleInputFocus = (e) => {
    const { name } = e.target;
    setInputFocus({ ...inputFocus, [name]: true });
    return;
  };

  const savedDatas = (values) => {
    console.log(values);
  };

  return (
    <>
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
            <Formik
              onSubmit={savedDatas}
              initialValues={initialLogin}
              validationSchema={LoginValidationSchena}
            >
              {({
                handleSubmit,
                getFieldProps,
                values,
                setFieldValue,
                touched,
                errors,
              }) => (
                <Form className="form">
                  <div className="contBtnRegister">
                    <m.span
                      variants={botonVariants}
                      initial="rest"
                      whileTap="tap"
                    >
                      <NavLink
                        className={"register-link"}
                        to={"/form/register"}
                      >
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
                        <div
                          className={getFieldClass(touched, errors, "email")}
                        >
                          <label htmlFor="email">Email</label>
                          <Field
                            {...getFieldProps("email")}
                            type="text"
                            name="email"
                            id="email"
                            onFocus={handleInputFocus}
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
                            onFocus={handleInputFocus}
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
                          <label
                            htmlFor="remember"
                            id="remember"
                            name="remember"
                          >
                            Remember me
                          </label>
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
                        whileTap="tap"
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
