import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field, Form } from "formik";
import { RegisterValidationSchena } from "./ValidationFormRegister/ValidationRegister";
import { ContFormRegister } from "./StyledRegister";
import {
  FiUser,
  GrClose,
  MdAlternateEmail,
  RiLockPasswordLine,
} from "react-icons/all";
//Autenticacion firebase
import { auth } from "../../Firebase/KeyFirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import PageTransition from "../PageTransition/PageTransition";
import { m} from "framer-motion";
import { NavLink } from "react-router-dom";
//Calendario formate
const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 90);
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 0);
//InitialRegister
const initialRegister = {
  email: "",
  date: "",
  password: "",
  genero: "",
  username: "",
  terminos: false,
};

function RegisterForm() {
  const [userExisting, setUserExisting] = useState(false);
  const [hiddenModal, setHiddenModal] = useState(false);
  const [inputFocus, setInputFocus] = useState({
    username: false,
    password: false,
    email: false,
  });
  //-----------------
  const handleInputFocus = (e) => {
    const { name } = e.target;
    setInputFocus({ ...inputFocus, [name]: true });
  };
  const handleSubmitRegister = async (values, { resetForm }) => {
    const { email, date, password, genero, username, terminos } = values;
    console.log(values);
    await registerUser(email, password);
    resetForm();
    return;
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
  //----------------

  const registerUser = async (email, password) => {
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(createUser);
    } catch (error) {
      const code = error.code;
      if (code === "auth/email-already-in-use") {
        return setUserExisting(true), setHiddenModal(true);
      }
    }
  };

  const closeExistingUser = () => {
    return setHiddenModal(false);
  };

  return (
    <>
      <PageTransition>
        <ContFormRegister>
          <Formik
            onSubmit={handleSubmitRegister}
            initialValues={initialRegister}
            validationSchema={RegisterValidationSchena}
          >
            {({
              handleSubmit,
              getFieldProps,
              values,
              setFieldValue,
              touched,
              errors,
            }) => (
              <Form className="formRegister">
                <m.span
                  className="close-register"
                  whileHover={{  scale: 0.8  }}
                
                >
                  <NavLink to={"/"} >
                    <GrClose />
                  </NavLink>
                </m.span>
                <div className="cont-inputsData">
                  <div className="cont-title-register">
                    <h2>Registro</h2>
                  </div>
                  <div className={getFieldClass(touched, errors, "username")}>
                    <label htmlFor="username">Username</label>
                    <Field
                      {...getFieldProps("username")}
                      type="text"
                      name="username"
                      id="username"
                    />
                    <FiUser className="icon-register" />
                    {touched.username && errors.username && (
                      <div className="txtError">{errors.username}</div>
                    )}
                  </div>
                  <div className={getFieldClass(touched, errors, "email")}>
                    <label htmlFor="email">Email</label>
                    <Field
                      {...getFieldProps("email")}
                      type="text"
                      name="email"
                      id="email"
                      onFocus={handleInputFocus}
                    />
                    <MdAlternateEmail className="icon-register" />
                    {touched.email && errors.email && (
                      <div className="txtError">{errors.email}</div>
                    )}
                  </div>
                  <div className={getFieldClass(touched, errors, "password")}>
                    <label htmlFor="password">Password</label>
                    <Field
                      {...getFieldProps("password")}
                      type="password"
                      name="password"
                      id="password"
                      onFocus={handleInputFocus}
                    />
                    <RiLockPasswordLine className="icon-register" />
                    {touched.password && errors.password && (
                      <div className="txtError">{errors.password}</div>
                    )}
                  </div>


                  <div className="cont-genero">
                    <label htmlFor="genero" className="register-label">
                      Género
                    </label>

                    <Field
                      {...getFieldProps("genero")}
                      type="text"
                      name="genero"
                      id="genero"
                      className="form-field input-register "
                      as="select"
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="masculine">Masculino</option>
                      <option value="femenine">Femenino</option>
                      <option value="other">Otro</option>
                    </Field>
                    {touched.genero && errors.genero && (
                      <div className="txtError">{errors.genero}</div>
                    )}
                  </div>
                  <div className="cont-date">
                    <label htmlFor="date" className="register-label">
                      Fecha de nacimiento:
                    </label>
                    <DatePicker
                      id="date-of-birth"
                      //Es en select, no en value, importante
                      selected={values.date}
                      onChange={(date) => setFieldValue("date", date)}
                      dateFormat="dd/MM/yyyy"
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      minDate={minDate}
                      maxDate={maxDate}
                    />
                    {touched.date && errors.date && (
                      <div className="txtError">{errors.date}</div>
                    )}
                  </div>
                  <div className="cont-terminos">
                    <input
                      type="checkbox"
                      id="terminos"
                      {...getFieldProps("terminos")}
                    />
                    <label htmlFor="terminos" className="terminos">
                      Acepto términos y condiciones
                    </label>
                    {touched.terminos && errors.terminos && (
                      <div className="txtError">{errors.terminos}</div>
                    )}
                  </div>
                  <div className="cont-btnRegister">
                    <button onClick={handleSubmit} type="submit">
                      Enviar
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </ContFormRegister>
      </PageTransition>
    </>
  );
}

export default RegisterForm;
