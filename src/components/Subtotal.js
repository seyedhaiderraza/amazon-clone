import React, { useContext, useEffect, useState } from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { StateContext } from '../state/StateProvider'
import { useNavigate } from 'react-router-dom'

const getTotalPayment = (basket)=>{

  return basket.reduce((acc,item)=>{
      return acc + Number(item.price.substring(1).replace(/,/g,''))
    },0)
  }
 const Subtotal = () => {
const navigate = useNavigate()


    const {basket} = useContext(StateContext)
  return (
    <div className="subtotal">
    <CurrencyFormat
    renderText={(value) => (
        <>
            <p>
            Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift"> <input type="checkbox" /> This order contains a gift
            </small>
        </>
        )}
            decimalScale={2}
            value={getTotalPayment(basket).toLocaleString('en-IN',{
                style: 'currency',
                currency: 'INR',  
            })}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button onClick={e=>navigate('/payment')}>Proceed to Checkout</button>
            </div>
            );
    }

export {Subtotal, getTotalPayment}
