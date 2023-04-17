import React from 'react'
import ProductNav from '../Products/ProductNav'



// import AddressBook from '../UI/CartModals/AddressBook'
// import PayLaterCheckout from '../UI/CartModals/PayLaterCheckout'
// import PayLaterConfirmation from '../UI/CartModals/PayLaterConfirmation'
// import DeleteWarning from '../UI/CartModals/DeleteWarning'
// import AddorEditAddress from '../UI/CartModals/AddorEditAddress'
// import WalletCheckout from '../UI/CartModals/WalletCheckout'
import AddCard from '../UI/CartModals/AddCard'
import KycProcess from '../UI/CartModals/KycProcess'
import CheckoutSucessful from '../UI/CartModals/CheckoutSucessful'
import InsuficientWallet from '../UI/CartModals/InsuficientWallet'
import CheckoutUnsuccessful from '../UI/CartModals/CheckoutUnsuccessful'
import EnterIppis from '../UI/CartModals/EnterIppis'
import KycDirector from '../UI/CartModals/KycDirector'

const Cart = () => {
  return (
    <div>
      <ProductNav />  
      {/* <KycDirector /> */}
    </div>
  )
}

export default Cart