import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { StateContext } from '../state/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './Payment.css'
import CurrencyFormat from 'react-currency-format';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { getTotalPayment } from './Subtotal'
import axios from './axios'
import { red } from '@mui/material/colors'
import { db } from '../firebase'
import { collection, doc, setDoc } from 'firebase/firestore'

const Payment = () => {
    const navigate  = useNavigate()
    const {user, basket, emptyBasket} = useContext(StateContext)
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState(null)
    const [processing, setProcessing]= useState("")
    const [succeeded, setSucceeded] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(null)

//every time basket resets
// all payment amount resets so we need a new clientsecret for new payment
    useEffect(()=>{
      console.log('useeffect called error object value', error);
      /*
      products removed/card number entered
      => triggers re-render
      error will be null
      */
        //generate a clientsecret from stripe
        const getClientSecret = async ()=>{
            try{
            const response=await axios({
                method:`post`,
                url:`/payments/create?total=${getTotalPayment(basket)*100}`
            })
            if(!response?.data?.clientSecret)
            throw  new Error();

            setClientSecret(response.data.clientSecret)
          
        }
            catch(err){
                //here error wont be null so disable buy now 
                
                setError('Basket is empty cannot proceed with checkouts')
                setDisabled(true);//disable buy now button
                }
        }

       getClientSecret();
    },[basket])
console.log('THE client secret is>>>', clientSecret)



const handleSubmit = async(e)=>{

    e.preventDefault()
    console.log(JSON.stringify(user));
    setProcessing(true) // buy now clicked once, processing=true=> button disabled for again clicking buy now
     
    const payload = await stripe.confirmCardPayment(clientSecret,{ //without clientSecret being correct this will throw error
        payment_method:{
            card: elements.getElement(CardElement)
        }
    }).then(async({paymentIntent})=>{
        //paymentIntent = payment confirmation
//db firebase operation to persist order
console.log('basket is', basket);
            const userRef = doc(db, 'users', user?.uid);
            const ordersRef = collection(userRef, 'orders');
            const orderDoc = doc(ordersRef, paymentIntent.id);
            await setDoc(orderDoc, {
                basket: Array.from(basket),
                amount: paymentIntent.amount,
                created: paymentIntent.created
            });
        //  .doc(user?.uid) <-- this is old code not working
        //  .collection('orders')
        //  .doc(paymentIntent.id)
        // .set({
        //      basket:Array.from(basket),
        //      amount: paymentIntent.created
        //  })
        //  .then(()=>{
        //     console.log('success payment');
        //  })
        //  .catch(error => {
        //     // Error handling
        //     console.error('Error saving data:', error);
        //   });

        console.log('paymentIntent>>>',paymentIntent);
        setSucceeded(true)
        setError(null)
        setProcessing(false)
        emptyBasket()
        navigate('/orders')
    } ).catch(err=>{
        setError(err)
        console.log(err);
    }
    )
}


const handleChange = (e)=>{
(error!==""|| basket.length===0 || e.empty)?
     setDisabled(true):
    setDisabled(false);

    //means disable buy now button if  either basket is empty or card field is empty
//if card details are empty not filled 
/*
then e.empty ===true si disabled will
 be true from defualt condition defined 
 in state on top but if we fill any thing
  in card details then e.empty will become
   false so setdisabled will be false as well for the button
   */
    setError(e.error ? e.error.message : "");
}


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
                            <form onSubmit={handleSubmit}>
                                <div className="payment_priceContainer">                      
                                        <CurrencyFormat
                                            renderText={
                                                value => 
                                            <>
                                            <h3>  <CardElement onChange={handleChange}/>
                                            Order Total: {value}</h3>
                                            </>
                                            } 
                                            decimalScale={2} 
                                            value={getTotalPayment(basket)}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'₹'} 
                                        />
                                    <button type="submit" disabled={processing||disabled||succeeded}>
                                             <span>{processing? <p>Processing</p>:"Buy Now"}</span>
                                    </button>
                                    </div>
                                    {
                                        error && (
                                                    <>
                                                     <br/>
                                                     <div style={{color: "red"}}>
                                                          {error.message}
                                                     </div>
                                                    </>
                                        )
                                    }
                            </form>
                        </div>
                       
            </div>
        </div>
    </div>
    </>
  )
}

export default Payment
/*
pk_test_51NBviXSBPt9TBhsLRap4XBU5KjqmvieNaQYdOLgFa2sNyTHr73riUiGf5p9CaQfp8XNygfoBuRlOtYRrpA7D7FzX00iOgj3FhO
sk_test_51NBviXSBPt9TBhsLUF43kCMag09GFKIATIHejcgK05uKwmJMI0A7EfPSYhrUSV6meP9sjClJstHonTwtco19yEyQ00iDlM0Jpg
*/