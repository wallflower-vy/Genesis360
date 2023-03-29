import Head from "next/head";
import Home from "./Home/Home";



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
      <Home/>
      
     
   </> 
  )
}
