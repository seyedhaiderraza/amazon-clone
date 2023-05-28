import React, { useContext } from 'react'
import './Product.css'
import { StateContext } from '../state/StateProvider'
const Product = ({id, title, image, price, rating,isCheckout=false}) => {

  const {addtoBasket} = useContext(StateContext)

  const addBasket = ()=>{
    addtoBasket({
      id:id,
      title:title,
      image:image,
      price: price,
      rating: rating
    })
  }
  return (
    <div className="product" key={id}>
        <div className="product_info">
            <p>{title.length>100?title.slice(0,100)+'...':title}</p>
            <p className="product_price">
               {price && (<small>{price.charAt(0)}</small>)}
                <strong>{price && price.substring(1)}</strong>
            </p>
            <div className="product_rating">
            {Array(rating).fill().map((_,i)=><p key={i}>⭐</p>)}
            </div>
        </div>
        
            
              <img
             src={image}
              alt="Laptop Image" />
           {!isCheckout && (<> <button onClick={addBasket}>Add to Basket</button> </>)
        }
    </div>
  )
}

export default Product