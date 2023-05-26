import React, { useContext } from 'react'
import Header from './Header'
import { StateContext } from '../state/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'
import './Payment.css'
const Payment = () => {
    const {user, basket} = useContext(StateContext)
  return (
    <> 
     <Header/>
    <div className="payment">
        <div className="payment_container">
        <h1>
            Checkout (
                <Link to="/checkout">{basket?.length} Items</Link>
            )
        </h1>
            {/**Payment section - delivery addrees */}
            <div className="payment_section">
            <div className="payment_title">
                    <h3>Delivery Address</h3>
            </div>
            <div className="payment_address">
                <p>{user?.email}</p>
                <p>123 React Street</p>
                <p>LakeView, IN</p>
            </div>
            </div>
            {/**Payment section -review items */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className="payment_Items">
                    {
                        basket.map(item=>{
                            return <>
                                <CheckoutProduct
                                id={item.id}
                                image={item.image}
                                rating={item.rating}
                                price={item.price}
                                title={item.title}
                                key={item.key}
                                />
                            </>
                        })
                    }
                </div>
            </div>
            {/**Payment section -payment method */}
            <div className="payment_section">
                        <div className="payment_title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment_details">
                            {/*Strip payment*/}
                        </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Payment
