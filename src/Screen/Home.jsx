import React from "react";

import { signOut } from "firebase/auth";
import { auth } from "../Firebase/KeyFirebase";

const Home = () => {
  return (
    <>
      <h2>Cerrar sesión</h2>
      <button type="button" onClick={() => signOut(auth)}></button>
    </>
  );
};

export default Home;
