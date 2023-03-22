import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import DelayChildren from "../DelayChildren/DelayChildre";
import PageTransition from "../PageTransition/PageTransition";
import { ContFormRegister } from "./StyledRegister";
import { TextInput } from "../InputsLabelTop/Inputs";
import Button from "../Button/Button";
import { m, LazyMotion, domAnimation } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";
import {
  BsFillBackspaceFill,
  FiUserCheck,
  MdOutlineAlternateEmail,
  RiLockPasswordLine,
} from "react-icons/all";
import { RegisterValidationSchena } from "./ValidationFormRegister/ValidationRegister";

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

const VariantsBackLogin = {
  hover: { scale: 0.9 },
  animate: {
    scale: 1,
  },
};

const defaultRegister = {
  username: "",
  email: "",
  password: "",
  date: new Date(),
  genero: "",
};

const RegisterForm = () => {
  const Data = (values) => {
    console.log(values);
  };

  return (
    <>
      <LazyMotion features={domAnimation}>
        <PageTransition>
          <ContFormRegister>
            <div className="ContMainDataInput">
              <m.span
                className="BackLogin"
                variants={VariantsBackLogin}
                whileHover="hover"
              >
                <NavLink to={"/"}>
                  <BsFillBackspaceFill />
                </NavLink>
              </m.span>
              <div className="ContTitleForm">
                <h2>Registro</h2>
              </div>

              <Formik onSubmit={Data} initialValues={defaultRegister}>
                {({ handleSubmit, getFieldProps, values, setFieldValue }) => (
                  
                  <div className="ContInputs">
                    <div className="DataInputs">
                      <FiUserCheck className="userIcon  icon-register" />
                      <MdOutlineAlternateEmail className="emailIcon  icon-register" />
                      <RiLockPasswordLine className="passwordIcon  icon-register" />

                      <DelayChildren
                        tagParent={"div"}
                        tagBoys={"div"}
                        classParent={"InputsGap"}
                        classBoys={"parentInputs"}
                      >
                        <TextInput
                          label={"Your name / Username"}
                          type="text"
                          name={"username"}
                          getFieldProps={getFieldProps}
                        />

                        <TextInput
                          label={"Your email"}
                          type="email"
                          name={"email"}
                        />
                        <TextInput
                          label={"Password"}
                          type="password"
                          name={"password"}
                        />
                        <label>
                          Digite su fecha de nacimiento: día/mes/año
                        </label>
                        <DatePicker
                          className="date"
                          id="birthdate"
                          dateFormat="dd/MM/yyyy"
                          name="date"
                        />
                        <div className="contSexo">
                          <select>
                            <option value="">
                              Select your sexual orientation
                            </option>
                            <option value="female">Female</option>
                            <option value="masculine">Masculine</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </DelayChildren>
                    </div>

                    <div className="ContButtonRegisterAndTerms">
                      <div className="ContTermins">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">
                          I agreee all statementes in terms of services
                        </label>
                      </div>
                      <m.div
                        variants={botonVariants}
                        initial="rest"
                        whileTap="tap"
                        className="ContBtnRegister"
                      >
                        <button>Enviar</button>
                      </m.div>
                    </div>
                  </div>
                )}
              </Formik>

              <div className="ContHaveCount">
                Have already an account ?
                <NavLink to={"/"}> Login here </NavLink>
              </div>
            </div>
          </ContFormRegister>
        </PageTransition>
      </LazyMotion>
    </>
  );
};

export default RegisterForm;
