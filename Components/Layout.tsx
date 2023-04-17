import Product from "@/pages/ProductList";
import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";
import { useState } from "react";
import React, { ReactNode } from "react";
import Modal from "./UI/Modal";
import Home from "@/pages/Home";
import Business from "@/pages/Business";
import Router from "next/router";
import Dashboard from "./Dashboard/Dashboard";

type layoutprops = {
  children: ReactNode;
  linkPath: string;
};

const Layout = ({ children, linkPath }: layoutprops) => {
  return (
    <>
      <div className="">
        <NavBar linkPath={linkPath}/>

        {children}  
       

      

        <Footer/>
      </div>
    </>
  );
};

export default Layout;
