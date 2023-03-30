import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field, Form } from "formik";
import { RegisterValidationSchena } from "./ValidationFormRegister/ValidationRegister";
import { ContFormRegister } from "./StyledRegister";
import {
  BiCommentError,
  FiUser,
  GrClose,
  MdAlternateEmail,
  MdMarkEmailRead,
  RiLockPasswordLine,
} from "react-icons/all";
//Autenticacion firebase
import { auth, dbFirestore } from "../../Firebase/KeyFirebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
//-------------------
//----Firestore data base
import {
  setDoc,
  doc,
} from "firebase/firestore";

//---
import PageTransition from "../PageTransition/PageTransition";
import { m } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import ModalMgs from "../../Components/ModalMgs/ModalMgs";

//Calendario formate
const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 90);
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 0);
//---------------------
const getFieldClass = (touched, errors, name) => {
  if (touched[name] && errors[name]) {
    return "form-field error";
  } else if (touched[name] && !errors[name]) {
    return "form-field value";
  } else {
    return "form-field";
  }
};
//InitialRegister
const initialRegister = {
  email: "",
  date: "",
  password: "",
  genero: "",
  username: "",
  terminos: false,
  name: "",
  lastname: "",
};

function RegisterForm() {
  const [userExisting, setUserExisting] = useState(false);
  const [hiddenModal, setHiddenModal] = useState(false);
  const navigate = useNavigate();

  //-----------------
  const handleSubmitRegister = async (data, { resetForm }) => {
    await registerUser(data, resetForm);
    return;
  };
  //----------------

  const registerUser = async (data, resetForm) => {
    try {
      const { email, password, username } = data;
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      data.username = username.toLowerCase();
      const userData = createUser.user;
      const uidUser = userData.uid;     
      setUserExisting(false);
      updateProfile(userData, { displayName: username });
      sendEmailVerification(userData);
      setHiddenModal(true);
      resetForm();
      sendDataRegister(data, uidUser);
      setTimeout(() => {
        navigate("/");
      }, 3000);

      return;
    } catch (error) {
      const code = error.code;
      if (code === "auth/email-already-in-use") {
        return setUserExisting(true);
      }
    }
  };
  //FUncioens para cerrar emailVerifid y userExiting
  const closeVerifEmail = () => setHiddenModal(false);
  const closeUserExiting = () => setUserExisting(false);
  //---

  const sendDataRegister = async (data, uid) => {
    try {
      const {
        email,
        date,
        password,
        genero,
        username,
        terminos,
        name,
        lastname,
      } = data;
      const refDoc = doc(dbFirestore, `users/${uid}`);
      setDoc(refDoc, {
        email,
        date,
        password,
        genero,
        username,
        name,
        lastname,
        terminos,
      });

      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageTransition>
        {hiddenModal && (
          <ModalMgs
            OpeModal={hiddenModal}
            FunctionExit={closeVerifEmail}
            title="Gracias por registarte"
            txt={"Verifique su email por favor (correo no deseado)"}
            height={10}
            width={20}
            bg="#ffff"
          >
            <MdMarkEmailRead className="absolute" />
          </ModalMgs>
        )}

        {userExisting && (
          <ModalMgs
            OpeModal={userExisting}
            bg="#ffff"
            height={10}
            width={22}
            title={"Email en uso"}
            txt="Ingrese otro email por favor"
            FunctionExit={closeUserExiting}
          >
            <BiCommentError className="absolute" />
          </ModalMgs>
        )}

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
                <m.span className="close-register" whileHover={{ scale: 0.8 }}>
                  <NavLink to={"/"}>
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

                  <div className={getFieldClass(touched, errors, "username")}>
                    <label htmlFor="name">Name</label>
                    <Field
                      {...getFieldProps("name")}
                      type="text"
                      name="name"
                      id="name"
                    />
                    <FiUser className="icon-register" />
                    {touched.name && errors.name && (
                      <div className="txtError">{errors.name}</div>
                    )}
                  </div>
                  <div className={getFieldClass(touched, errors, "lastname")}>
                    <label htmlFor="lastname">Last name</label>
                    <Field
                      {...getFieldProps("lastname")}
                      type="text"
                      name="lastname"
                      id="lastname"
                    />
                    <FiUser className="icon-register" />
                    {touched.lastname && errors.lastname && (
                      <div className="txtError">{errors.lastname}</div>
                    )}
                  </div>

                  <div className={getFieldClass(touched, errors, "email")}>
                    <label htmlFor="email">Email</label>
                    <Field
                      {...getFieldProps("email")}
                      type="text"
                      name="email"
                      id="email"
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
                      Registrarme
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
