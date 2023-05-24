import React from 'react'
import './Product.css'
const Product = ({title, image, price, rating}) => {
  return (
    <div className="product">
        <div className="product_info">
            <p>{title.length>100?title.slice(0,100)+'...':title}</p>
            <p className="product_price">
               {price && (<small>{price.charAt(0)}</small>)}
                <strong>{price && price.substring(1)}</strong>
            </p>
            <div className="product_rating">
            {Array(rating).fill().map((_,i)=><p>⭐</p>)}
            </div>
        </div>
            <img
             src={image}
              alt="Laptop Image" />
            <button>Add to Basket</button>
      
            
    </div>
  )
}

export default Product