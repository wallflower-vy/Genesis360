import Head from "next/head";
import Home from "./Home";

// import Business from "./Business/Business";
// import Business from "./Business/Business";



interface Props {
 
  title: string;
}



export default function Index({  title }: Props) {

  return (
    <>
   <Head>
        <title>{title ? title + "-Genesis360" : "Genesis"}</title>
        <meta name='description' content='Ecommerce website'></meta>
        <link rel='icon' href='/favicon.png' />
      </Head>
      
    <Home />
     
      
     
   </> 
  )
}
