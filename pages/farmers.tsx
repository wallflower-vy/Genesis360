
import AgricProducts from '@/Components/Farmers.tsx/AgricProducts'
import EverythingThrive from '@/Components/Farmers.tsx/EverythingThrive'
import FarmerHero from '@/Components/Farmers.tsx/FarmerHero'
import Story from '@/Components/Farmers.tsx/Story'
import React from 'react'

const farmers = () => {
  return (
    <div>
        <FarmerHero />
        <EverythingThrive />
        <Story />
        <AgricProducts />
    </div>
  )
}

export default farmers