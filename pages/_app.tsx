import Layout from '@/Components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Home from "@/pages/Home";
import Business from "@/pages/Business";



export default function App({ Component, pageProps }: AppProps) {

  return(
    <Layout >

      <Component {...pageProps} />
      {/* <Home /> */}
      {/* <Business /> */}
      
  </Layout>
  )
}
 