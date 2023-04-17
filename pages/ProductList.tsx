import Footer from '@/Components/Footer/Footer'
import Brands from '@/Components/Products/Brands'
import ProductListHero from '@/Components/Products/ProductListHero'
import ProductLayout from '@/Components/Products/ProductNav'
import Recommendedproduct from '@/Components/Products/Recommendedproduct'
import SubscriptionPackages from '@/Components/Products/SubscriptionPackages'

import PageModal from '@/Components/UI/PageModal'
import React, { useEffect, useState } from 'react'

const ProductList = () => {
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => { 
  //   if (showModal) {
  //   document.body.classList.add("overflow-hidden");
  // }
  //  else {
  //   document.body.classList.remove("overflow-hidden");
  // }
   
    setShowModal(true);
  }, [showModal]);

  return (
    <div>
      {showModal && <PageModal />}
        <ProductLayout />
        <ProductListHero/>
       <Recommendedproduct  />
        <SubscriptionPackages />
        <Brands />
        <Footer />

        
    </div>
  )
}

export default ProductList