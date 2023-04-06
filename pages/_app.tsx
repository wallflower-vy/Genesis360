import Layout from "@/Components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import Home from "@/pages/Home";
// // import Business from "@/pages/Business";
// import NavBar from "@/Components/Navbar/NavBar";
// import Footer from "@/Components/Footer/Footer";



import Layout from '@/Components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'




export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
   

      <Component {...pageProps} />

    
    </>
  );
}

