import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoginForm from "./Components/LoginForm/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import Errorpage from "./Components/ErrorPage/Errorpage";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import { domAnimation, LazyMotion } from "framer-motion";
import Loader from "./Components/Loader/Loader";
import Home from "./Screen/Home";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/KeyFirebase";

function App() {
  const [loading, setLoading] = useState(false);
  const [tokenUser, setTokenUser] = useState(null);

  const setLoadingState = (isLoading) => setLoading(isLoading);

  const isAuth = () => {
    return tokenUser
  };

  useEffect(() => {
    if (tokenUser) {
      console.log(tokenUser);
    }
    isAuth();
  }, [tokenUser]);

  return (
    <>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {loading && <Loader key={loading} />}

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
                path="/form/register"
                element={<RegisterForm setLoadingState={setLoadingState} />}
              />
              <Route path="home" element={<Home />} />
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
