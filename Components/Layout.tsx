import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";
import { useState } from "react";
import React, { ReactNode } from "react";
import Getstartedmodal from "./UI/Getstartedmodal";

type layoutprops = {
  children: ReactNode;
};

const Layout = ({ children }: layoutprops) => {
  const [modalisshown, showmodal] = useState(false);

  const showmodalhandler = () => {
    showmodal(true)
  };
  
  const hidemodalhandler = () => {
    showmodal(false)
  }

  return (
    <>
      <div className="">

       {modalisshown && <Getstartedmodal  hide={hidemodalhandler} /> }

        <NavBar show={showmodalhandler}/>

        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
