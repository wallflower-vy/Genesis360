import Banner from '@/Components/Home/Banner'
import MoreThanJust from '@/Components/Home/MoreThanJust'
import Simplifygroceries from '@/Components/Home/Simplifygroceries'
import Takestress from '@/Components/Home/Takestress'
import Whatpeople from '@/Components/Home/Whatpeople'
import WhoCanuse from '@/Components/Home/WhoCanuse'
import Whychoose from '@/Components/Home/Whychoose'
import Layout from '@/Components/Layout'

import React from 'react'

const Home = () => {
  return (
    <Layout linkPath='/farmers'>
      
     <Banner />
     <Whychoose />
     <WhoCanuse />
     <MoreThanJust />
     <Takestress />
     <Whatpeople />
     <Simplifygroceries />
     
    </Layout>
  )
}

export default Home;
