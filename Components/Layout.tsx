import Product from "@/pages/ProductList";
import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";

import React, { ReactNode } from 'react'
import SearchProResult from "@/pages/SearchProResult";
import ProductDetails from "./Products/ProductDetails";
import ProductList from "@/pages/ProductList";




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
