import React from 'react'
import Header from './Header'
import CheckoutBanner from './CheckoutBanner'
import './Checkout.css'
const Checkout = () => {
  return (
    <>
    <CheckoutBanner/>
    <div className="checkout">
      <div className="checkout_left">
        
        <div>
          <h2 className="checkout_title">
            Your Shopping Basket
            {/*Basket Items */}
               {/*Basket Items */}
                  {/*Basket Items */}
                     {/*Basket Items */}
          </h2>
        </div>
    </div>
    <div className="checkout_right">
      The Subtotal goes here
    </div>
    </div>
    </>
  )
}

export default Checkout
