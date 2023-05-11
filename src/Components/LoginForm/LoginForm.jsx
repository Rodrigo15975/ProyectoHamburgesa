import React, { useState, useEffect } from "react";
import { ConteinerForm } from "./StyledLogin";
import {
  AiOutlineGoogle,
  BiMessageError,
  BiMessageRoundedError,
  CiLogin,
  FaFacebookF,
  MdAlternateEmail,
  RiLockPasswordLine,
  Si1Password,
} from "react-icons/all";
import { m, domAnimation, LazyMotion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import bg from "./img/group-9.webp";
import { Field, Form, Formik } from "formik";
import { LoginValidationSchena } from "./ValidationLogin";
import { Google, auth, dbFirestore, Facebok } from "../../Firebase/KeyFirebase";
import { setDoc, doc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
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

const LoginForm = ({ title, textLogin, setLoadingState, setTokenUser }) => {
  const [isverifiedEmail, setIsverifiedEmail] = useState(true);
  //Errors, login acount
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [emailNotExit, setEmailNotExit] = useState(false);
  const [notConexion, setNotConexion] = useState(false);
  const [lockedCount, setLockedCount] = useState(false);
  const [unexpected, setUnexpected] = useState(false);
  //------------
  //--Errors login facebook
  const [credentialExisting, setCredentialExisting] = useState(false);
  const [errorLoginFacebook, setErrorLoginfacebook] = useState(false);
  const [ventanaBlock, setVentanaBlock] = useState(false);
  const [credentialGoogleExisting, setCredentialGoogleExisting] =
    useState(false);
  const [ventanaBlockGoogle, setVentanaBlockGoogle] = useState(false);
  const [invalidAcountGoogle, setInvalidAcountGoogle] = useState(false);
  //-------
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    const { email, password } = data;

    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      const dataLogin = userLogin.user;
      if (dataLogin.emailVerified) {
        const tokenAcces = dataLogin.accessToken;
        sessionStorage.setItem("token", tokenAcces);
        sessionStorage.setItem("username", dataLogin.displayName);
        //Verifica si el usuario esta logeado, si esta lo envia al home
        onAuthStateChanged(auth, (user) =>
          user ? (navigate("/home"), setTokenUser(user)) : setTokenUser(null)
        );
        return;
      }
      setIsverifiedEmail(false);
      return;
    } catch (error) {
      const errorCode = error.code;

      if (errorCode === "auth/wrong-password")
        return setPasswordIncorrect(true);
      else if (errorCode === "auth/user-not-found")
        return setEmailNotExit(true);
      else if (errorCode === "auth/network-request-failed")
        return setNotConexion(true);
      else if (errorCode === "auth/too-many-requests")
        return setLockedCount(true);
      else return setUnexpected(true);

      return errorCode === "auth/wrong-password"
        ? setPasswordIncorrect(true)
        : errorCode === "auth/user-not-found"
        ? setEmailNotExit(true)
        : errorCode === "auth/network-request-failed"
        ? setNotConexion(true)
        : errorCode === "auth/too-many-requests"
        ? setLockedCount(true)
        : () =>
            errorCode === "some-other-error-code"
              ? setUnexpected(true)
              : setErrorcount(true);
    }
  };
  //Cerrar ModalsErrors login
  const closeModalEmail = () => setIsverifiedEmail(true);
  const closeModalPassIncorrect = () => setPasswordIncorrect(false);
  const closeModalEmailInvalid = () => setEmailNotExit(false);
  const closenotConexion = () => setNotConexion(false);
  const closeLocketCount = () => setLockedCount(false);
  const closeUnexpected = () => setUnexpected(false);
  //----------
  //Cerrar modalsFacebook
  const closeModalCredientalExisting = () => setCredentialExisting(false);
  const closeErrorLoginFacebook = () => setErrorLoginfacebook(false);
  const closeBlockVentana = () => setVentanaBlock(false);
  //------
  const closeModalExistingGoogle = () => setCredentialGoogleExisting(false);
  const closeModalVentanaBlock = () => setVentanaBlockGoogle(false);
  const closeModalInvalidAcount = () => setInvalidAcountGoogle(false);

  // Login Google
  const loginGoogle = async (e) => {
    e.preventDefault();
    try {
      const userGoogle = await signInWithPopup(auth, Google);
      const dataGoogle = userGoogle.user;
      sessionStorage.setItem("tokenGoogle", dataGoogle.accessToken);
      const accessGoogle = sessionStorage.getItem("tokenGoogle");
      if (accessGoogle) {
        const { displayName, email, uid } = dataGoogle;
        sessionStorage.setItem("usernameGoogle", displayName);

        const refDB = doc(dbFirestore, `/users/${uid}`);
        setDoc(refDB, { displayName, email, uid });

        onAuthStateChanged(auth, (user) =>
          user ? (navigate("/home"), setTokenUser(user)) : setTokenUser(null)
        );
        return;
      }
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/account-exists-with-different-credential")
        return setCredentialGoogleExisting(true);
      else if (errorCode === "auth/popup-blocked")
        return setVentanaBlockGoogle(true);
      else if (errorCode === "auth/invalid-credential-or-provider-id")
        return setInvalidAcountGoogle(true);
      else return console.log(error);
    }
  };
  //Login Facebook
  const loginFacebook = async (e) => {
    e.preventDefault();
    try {
      const userFacebook = await signInWithPopup(auth, Facebok);
      const dataFacebook = userFacebook.user;
      sessionStorage.setItem("tokenFacebook", dataFacebook.accessToken);
      const accessFacebook = sessionStorage.getItem("tokenFacebook");
      if (accessFacebook) {
        const { displayName, email, uid } = dataFacebook;
        sessionStorage.setItem("usernameFacebook", displayName);
        const refDB = doc(dbFirestore, `/users/${uid}`);
        setDoc(refDB, { displayName, email, uid });
        onAuthStateChanged(auth, (user) =>
          user ? (navigate("/home"), setTokenUser(user)) : setTokenUser(null)
        );
      }
      return;
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/account-exists-with-different-credential")
        return setCredentialExisting(true);
      else if (errorCode === "auth/invalid-credential-or-provider-id")
        return setErrorLoginfacebook(true);
      else if (errorCode === "auth/popup-blocked") return setVentanaBlock(true);
      else return console.log(error);
    }
  };
  // ----------

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
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
          {credentialGoogleExisting && (
            <ModalMgs
              title={
                "El usuario ya tiene una cuenta asociada con el mismo correo electrónico"
              }
              txt={"pero con un proveedor de autenticación diferente"}
              FunctionExit={closeModalExistingGoogle}
              OpeModal={credentialGoogleExisting}
              height={15}
              width={25}
              bg={"#ffff"}
            />
          )}
          {ventanaBlockGoogle && (
            <ModalMgs
              title={
                "El navegador bloqueó  la ventana emergente de inicio de sesión"
              }
              txt={"Asegurese de permitir ventanas emergentes"}
              FunctionExit={closeModalVentanaBlock}
              OpeModal={ventanaBlockGoogle}
              height={15}
              width={25}
              bg={"#ffff"}
            />
          )}
          {invalidAcountGoogle && (
            <ModalMgs
              title={"Hubo un error al iniciar sesión con Google"}
              txt={"Inténtalo con otra cuenta o más tarde"}
              FunctionExit={closeModalInvalidAcount}
              OpeModal={invalidAcountGoogle}
              height={15}
              width={25}
              bg={"#ffff"}
            />
          )}

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
          {passwordIncorrect && (
            <ModalMgs
              title={"Password Incorrect"}
              OpeModal={passwordIncorrect}
              txt={"Ingresé correctamente su password"}
              height={15}
              width={15}
              bg={"#ffff"}
              FunctionExit={closeModalPassIncorrect}
            >
              <Si1Password
                className="absolute"
                style={{ color: "rgb(255 25 99)" }}
              />
            </ModalMgs>
          )}
          {emailNotExit && (
            <ModalMgs
              title={"La cuenta no existe"}
              OpeModal={emailNotExit}
              txt={
                <NavLink
                  style={{ color: "#2b5fc4", textDecorationLine: "underline" }}
                  to={"/register"}
                >
                  Registrarme
                </NavLink>
              }
              height={15}
              width={15}
              bg={"#ffff"}
              FunctionExit={closeModalEmailInvalid}
            >
              <BiMessageRoundedError
                className="absolute"
                style={{ color: "rgb(255 25 99)" }}
              />
            </ModalMgs>
          )}
          {notConexion && (
            <ModalMgs
              title={"Ocurrió algo inesperado"}
              OpeModal={notConexion}
              txt={"Verifique su conexión a Internet por favor"}
              height={15}
              width={15}
              bg={"#ffff"}
              FunctionExit={closenotConexion}
            >
              <BiMessageRoundedError
                className="absolute"
                style={{ color: "rgb(255 25 99)" }}
              />
            </ModalMgs>
          )}
          {lockedCount && (
            <ModalMgs
              title={"Demasiados intentos realizados"}
              OpeModal={lockedCount}
              txt={"Inténtalo más tarde"}
              height={15}
              width={15}
              bg={"#ffff"}
              FunctionExit={closeLocketCount}
            >
              <BiMessageRoundedError
                className="absolute"
                style={{ color: "rgb(255 25 99)" }}
              />
            </ModalMgs>
          )}
          {unexpected && (
            <ModalMgs
              title={"Ups, algo inesperado sucedio."}
              OpeModal={unexpected}
              txt={"Inténtalo más tarde."}
              height={15}
              width={15}
              bg={"#ffff"}
              FunctionExit={closeUnexpected}
            >
              <BiMessageRoundedError
                className="absolute"
                style={{ color: "rgb(255 25 99)" }}
              />
            </ModalMgs>
          )}
          {credentialExisting && (
            <ModalMgs
              title={
                "El usuario ya tiene una cuenta asociada con el mismo correo electrónico"
              }
              txt={"pero con un proveedor de autenticación diferente"}
              FunctionExit={closeModalCredientalExisting}
              OpeModal={credentialExisting}
              height={15}
              width={25}
              bg={"#ffff"}
            />
          )}
          {errorLoginFacebook && (
            <ModalMgs
              title={"Hubo un error al iniciar sesión con Facebook"}
              txt={"Inténtalo con otra cuenta o más tarde"}
              FunctionExit={closeErrorLoginFacebook}
              OpeModal={errorLoginFacebook}
              height={15}
              width={22}
              bg={"#ffff"}
            />
          )}
          {ventanaBlock && (
            <ModalMgs
              title={"La ventana autenticación fue bloqueada  "}
              txt={
                "Asegúrese de permitir las ventanas emergentes en su navegador"
              }
              FunctionExit={closeBlockVentana}
              OpeModal={ventanaBlock}
              height={15}
              width={25}
              bg={"#ffff"}
            />
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
                      <div className="contButtonsLogin">
                        <hr />
                        <m.button
                          variants={botonVariants}
                          initial="rest"
                          whileTap={"tap"}
                          className="fb"
                          type="button"
                          onClick={loginFacebook}
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
                      </div>
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
