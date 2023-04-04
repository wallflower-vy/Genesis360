import Footer from '@/Components/Footer/Footer'
import Brands from '@/Components/Products/Brands'
import ProductListHero from '@/Components/Products/ProductListHero'
import ProductLayout from '@/Components/Products/ProductNav'
import Recommendedproduct from '@/Components/Products/Recommendedproduct'
import SubscriptionPackages from '@/Components/Products/SubscriptionPackages'
import React from 'react'

const ProductList = () => {
  return (
    <div>
        <ProductLayout />
        <ProductListHero/>
        <Recommendedproduct />
        <SubscriptionPackages />
        <Brands />
        <Footer />

        
    </div>
  )
}

export default ProductList