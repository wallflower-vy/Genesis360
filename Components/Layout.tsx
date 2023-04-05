import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";
import { useState } from "react";
import React, { ReactNode } from "react";
import Modal from "./UI/Modal";
import Home from "@/pages/Home";
import Business from "@/pages/Business";
import Login from "./Forms/Login";
import SignUp from "./Forms/Signup";
import Forgetpassword from "./Forms/ForgetPassword";
import Resetpassword from "./Forms/ResetPassword";


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


  return (
    <>
      <div className="">

       {Modalisshown && <Modal  hide={hidemodalhandler} /> }

       <NavBar show={showmodalhandler}/>

       {/* {children}   */}
       {/* <Login /> */}
       {/* <SignUp /> */}
       {/* <Forgetpassword /> */}
        <Resetpassword />      

       <Footer/>
      </div>
    </>
  );
};

export default Layout;
