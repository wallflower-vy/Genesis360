import Banner from '@/Components/Home/Banner'
import MoreThanJust from '@/Components/Home/MoreThanJust'
import Simplifygroceries from '@/Components/Home/Simplifygroceries'
import Takestress from '@/Components/Home/Takestress'
import Whatpeople from '@/Components/Home/Whatpeople'
import WhoCanuse from '@/Components/Home/WhoCanuse'
import Whychoose from '@/Components/Home/Whychoose'

import React from 'react'

const Home = () => {
  return (
    <div>
      <Banner />
     <Whychoose />
     <WhoCanuse />
     <MoreThanJust />
     <Takestress />
     <Whatpeople />
     <Simplifygroceries />
     
      
    </div>
  )
}

export default Home
