import Product from "@/pages/ProductList";
import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";
import { useState } from "react";
import React, { ReactNode } from "react";
import Modal from "./UI/Modal";

type layoutprops = {
  children: ReactNode;
};

const Layout = ({ children }: layoutprops) => {
  const [Modalisshown, showmodal] = useState(false);

  const showmodalhandler = () => {
    showmodal(true)
  };
  
  const hidemodalhandler = () => {
    showmodal(false)
  }

  return (
    <>
      <div className="">

       {Modalisshown && <Modal  hide={hidemodalhandler} /> }

        <NavBar show={showmodalhandler}/>

        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
