import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";
import { useState } from "react";
import React, { ReactNode } from "react";
import Modal from "./UI/Modal";
import Home from "@/pages/Home";
import Business from "@/pages/Business";


type layoutprops = {
  children: ReactNode;
};

const Layout = ({ children }: layoutprops) => {
  const [Modalisshown, showmodal] = useState(false);
  const [HeaderIsHidden, setshow] = useState(false)

  const showmodalhandler = () => {
    showmodal(true)
  };
  
  const hidemodalhandler = () => {
    showmodal(false)
  }

  const hideheaderhandler =() => {
    setshow(false)
  }

  return (
    <>
      <div className="">

       {Modalisshown && <Modal  hide={hidemodalhandler} /> }

       {HeaderIsHidden && <NavBar show={showmodalhandler}/>}

       {children}  
      

       {HeaderIsHidden && <Footer/>}
      </div>
    </>
  );
};

export default Layout;
