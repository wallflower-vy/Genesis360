import React from 'react'
import ProductLayout from '@/Components/Products/ProductNav'
import Recommendedproduct from '@/Components/Products/Recommendedproduct'
import Footer from '@/Components/Footer/Footer'
import SearchedProResult from '@/Components/Products/SearchedProResult'
const SearchProResult = () => {
  return (
    <div>
         <ProductLayout />
         <SearchedProResult />
        
        <Footer/>
    </div>
  )
}

export default SearchProResult