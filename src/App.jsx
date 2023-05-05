import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoginForm from "./Components/LoginForm/LoginForm";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import Errorpage from "./Components/ErrorPage/Errorpage";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import { domAnimation, LazyMotion } from "framer-motion";
import Loader from "./Components/Loader/Loader";
import Home from "./Screen/Home";
import NotConnetion from "./NoConnetion/NotConnetion";
import AboutUs from "./Screen/AboutUs/AboutUs";
import Menu from "./Screen/Menu/Menu";
import Layout from "./Layout/Layout";
import Contact from "./Screen/Contact/Contact";
import SelectionPago from "./Components/MethodsPago/SelectionPago/SelectionPago";
import Visa from "./Components/MethodsPago/Visa/Visa";
import Paypal from "./Components/MethodsPago/Paypal/Paypal";
function App() {
  const [tokenUser, setTokenUser] = useState(null);

  //Conexoin a internet
  const [isOnline, setIsOnline] = useState(null);
  const [loadingConnection, setLoadingConnection] = useState(true);
  //-------------

  const EnterHome = () => {
    const savedToken = sessionStorage.getItem("token");
    const savedTokedGoogle = sessionStorage.getItem("tokenGoogle");
    const savedTokenFacebook = sessionStorage.getItem("tokenFacebook");

    if (savedTokedGoogle) {
      return !!savedTokedGoogle;
    }
    if (savedToken) {
      return !!savedToken;
    }
    if (savedTokenFacebook) {
      return !!savedTokenFacebook;
    }
  };
  useEffect(() => {
    //Almacena el valor, dependiendo del resultado, true, para ingresar, falso para no ingresar
    EnterHome();

    //Funciones que verifican la conexion
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    //LLamos a window y compbramos la conexion a internet, y le pasamos la funcion de online y offline
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    //Removemos los eventos
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [tokenUser]);

  useEffect(() => {
    //Guardamos el tiempo de ejecucion

    const timer = setTimeout(() => {
      setLoadingConnection(false);
    }, 3000);
    //Luego limpiamos el timer
    return () => clearTimeout(timer);
  }, []);

  if (loadingConnection) return <Loader />;
  if (isOnline === false) return <NotConnetion />;

  return (
    <>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {/* Routes free */}
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <LoginForm
                    textLogin={"Braun"}
                    title={"Empresa"}
                    setTokenUser={setTokenUser}
                  />
                }
              />
              <Route path="/register" element={<RegisterForm />} />
              {/* ----------------------- */}
              {/* Routes privateprotect con login  */}
              <Route
                path="/home"
                element={
                  EnterHome() ? (
                    <Layout>
                      <Home />
                    </Layout>
                  ) : (
                    <Navigate to={"/"} />
                  )
                }
              />
              {/* ------------------------------------- */}

              <Route
                path="/home/menu"
                element={
                  EnterHome() ? (
                    <Layout>
                      <Menu />
                    </Layout>
                  ) : (
                    <Navigate to={"/"} />
                  )
                }
              />
              <Route
                path="/home/about"
                element={
                  EnterHome() ? (
                    <Layout>
                      <AboutUs />
                    </Layout>
                  ) : (
                    <Navigate to={"/"} />
                  )
                }
              />

              <Route
                path="/home/contact"
                element={
                  EnterHome() ? (
                    <Layout>
                      <Contact />
                    </Layout>
                  ) : (
                    <Navigate to={"/"} />
                  )
                }
              />
              <Route
                path="/home/menu/pago"
                element={
                  EnterHome() ? <SelectionPago /> : <Navigate to={"/"} />
                }
              />
              <Route
                path="/home/menu/pago/visa"
                element={EnterHome() ? <Visa /> : <Navigate to={"/"} />}
              />
              <Route
                path="/home/menu/pago/paypal"
                element={EnterHome() ? <Paypal /> : <Navigate to={"/"} />}
              />

              <Route path="/error" element={<Errorpage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}

export default App;
