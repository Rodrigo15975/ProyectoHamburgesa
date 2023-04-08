import React from "react";
import PageTransition from "../../Components/PageTransition/PageTransition";
import { MainMenu } from "./StyledMenu/StyledMenu";
import Footer from "../../Components/Footer/Footer";

const Menu = () => {
  return (
    <>
      <PageTransition>
        <MainMenu>Menu</MainMenu>
        <Footer/>
      </PageTransition>
    </>
  );
};

export default Menu;
