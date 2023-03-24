import { AnimatePresence } from "framer-motion";
import LoginForm from "./Components/LoginForm/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import Errorpage from "./Components/ErrorPage/Errorpage";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence>
      
          <Routes>
            <Route
              path="/"
              element={<LoginForm textLogin={"Braun"} title={"Empresa"} />}
            />
            <Route path="/form/register" element={<RegisterForm />} />
            <Route  path="/error" element={<Errorpage />}  />
            <Route path="*" element={<PageNotFound/>}  />
           
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
