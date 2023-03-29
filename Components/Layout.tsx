import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";

import React, { ReactNode } from 'react'




type layoutprops = {
  children: ReactNode
}





const Layout = ({children}:layoutprops) => {
  return (
    <>
      
      <div className=''>
        
        <NavBar />
       
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
