
import PageModal from '@/Components/UI/PageModal';
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
      <ProductListHero />
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