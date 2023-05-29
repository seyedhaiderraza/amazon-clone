import React from 'react'
import './Order.css'
import moment from "moment"
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
const Order = ({order}) => {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>Order Date: {moment(order.data?.created*1000).format("MMMM Do YYYY, h:mma")}</p>
        <p className="order_id">
            <small>Order ID: {order.id}</small>
        </p>
        {
            order.data?.basket?.map(item=>(

            <CheckoutProduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                hideButton={true}
            />
            ))
        }
        <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
    </div>
  )
}

export default Order
