import { AnimatePresence, motion } from "framer-motion";
import LoginForm from "./Components/LoginForm/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
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
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
