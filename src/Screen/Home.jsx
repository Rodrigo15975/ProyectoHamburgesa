import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dataUser = sessionStorage.getItem("username");
  const [username, setUsername] = useState(dataUser);
  
  const navigate = useNavigate();
  const exitLogin = async () => {
    navigate("/");
    sessionStorage.clear();
  };

  return (
    <>
      <h1>{username}</h1>    
      <button type="button" onClick={exitLogin}>
        Log out
      </button>
    </>
  );
};

export default Home;
