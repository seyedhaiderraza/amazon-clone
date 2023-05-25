import React, { useContext } from 'react'
import './CheckoutProduct.css'
import { StateContext } from '../state/StateProvider'
const CheckoutProduct = ({id,
    title,
    image,
     price,
    rating}) => {


const {removeFromBasket}= useContext(StateContext)
const removeItemFromBasket = ()=>{//if id given in arg then doesn't works delete everything and also blank image 
    removeFromBasket(id)
        }
  return (
    <div className='checkoutProduct' key={id}>
      <img src={image} alt="" className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">
            {title}
            </p>
            <p className="checkoutProduct_price">
            {price}
            </p>
            <div className="checkoutProduct_rating">
            {Array(rating).fill().map((_,i)=><p>⭐</p>)}
            </div>
            
      <button onClick={removeItemFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
