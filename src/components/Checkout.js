import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import CheckoutBanner from './CheckoutBanner'
import './Checkout.css'
import Subtotal from './Subtotal'
import { StateContext } from '../state/StateProvider'
import Product from './Product'
import CheckoutProduct from './CheckoutProduct'
const Checkout = () => {
  const {basket} = useContext(StateContext)
  return (
    <>
    <CheckoutBanner/>
    <div className="checkout">
      <div className="checkout_left">
        
        <div>
          <h2 className="checkout_title">
            Your Shopping Basket
           
             { basket.map(product=>{
               return(<CheckoutProduct  id={product.id}
                            title={product.title}
                            image={product.image}
                             price={product.price}
                            rating={product.rating}
                            isCheckout={true}
                           />)
            })
       
            }
          </h2>
        </div>
    </div>
    <div className="checkout_right">
    <Subtotal/>
    </div>
    </div>
    </>
  )
}

export default Checkout
