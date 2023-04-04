import BusinessHero from '@/Components/Business/BusinessHero'
import EveryThing from '@/Components/Business/EveryThing'
import Focus from '@/Components/Business/Focus'
import HowItWorks from '@/Components/Business/HowItWorks'
import Whatentrepreneur from '@/Components/Business/Whatentrepreneur'
import React from 'react'

const Business = () => {
  return (
    <div>
      <BusinessHero  />
      <EveryThing />
      <HowItWorks />
      <Whatentrepreneur />
      <Focus />
    </div>
  )
}

export default Business
