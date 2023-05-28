import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import CheckoutBanner from './CheckoutBanner'
import './Checkout.css'
import {Subtotal} from './Subtotal'
import { StateContext } from '../state/StateProvider'
import Product from './Product'
import CheckoutProduct from './CheckoutProduct'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Checkout = () => {
  const {basket, user} = useContext(StateContext)
  return (
    <>
     <Header/>
    <CheckoutBanner/>
    <div className="checkout">
      <div className="checkout_left">
        
        <div>
        <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">
            Your Shopping Basket
            <TransitionGroup className="checkout_items">
             { basket.map(product=>{
               return(
                <CSSTransition key={Math.random()*10+100} classNames="checkout_item" timeout={300}>
                    <CheckoutProduct key={product.id} id={product.id}
                            title={product.title}
                            image={product.image}
                             price={product.price}
                            rating={product.rating}
                            isCheckout={true}
                           />
                </CSSTransition>)
            })
       
            }
            </TransitionGroup>
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
