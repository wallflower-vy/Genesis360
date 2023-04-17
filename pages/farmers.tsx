
import AgricProducts from '@/Components/Farmers.tsx/AgricProducts'
import EverythingThrive from '@/Components/Farmers.tsx/EverythingThrive'
import FarmerHero from '@/Components/Farmers.tsx/FarmerHero'
import Story from '@/Components/Farmers.tsx/Story'
import Layout from '@/Components/Layout'
import React from 'react'

const farmers = () => {
  return (
    <Layout linkPath=''>
        <FarmerHero />
        <EverythingThrive />
        <Story />
        <AgricProducts />
    </Layout>
  )
}

export default farmers

farmers.getLayout = (page:any) => (
  <>
    {page}
    
  </>
)