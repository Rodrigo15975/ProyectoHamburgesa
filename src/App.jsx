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
function App() {
  const [loading, setLoading] = useState(false);
  const [tokenUser, setTokenUser] = useState(null);
  const setLoadingState = (isLoading) => setLoading(isLoading);
  
  const EnterHome = () => {
    const savedToken = sessionStorage.getItem("token");
    return !!savedToken;
  };
  useEffect(() => {
    //Almacena el valor, dependiendo del resultado, true, para ingresar, falso para no ingresar
    EnterHome();
  }, [tokenUser]);

  return (
    <>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {loading && <Loader key={loading} />}
          {/* Routes free */}
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <LoginForm
                    textLogin={"Braun"}
                    title={"Empresa"}
                    setLoadingState={setLoadingState}
                    setTokenUser={setTokenUser}
                  />
                }
              />
              <Route
                path="/register"
                element={<RegisterForm setLoadingState={setLoadingState} />}
              />
              {/* ----------------------- */}
              {/* Routes privateprotect con login  */}
              <Route
                path="/home"
                element={EnterHome() ? <Home /> : <Navigate to={"/"} />}
              />
              {/* ------------------------------------- */}
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
