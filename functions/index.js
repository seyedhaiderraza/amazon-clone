const functions = require('firebase-functions')
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51NBviXSBPt9TBhsLUF43kCMag09GFKIATIHejcgK05uKwmJMI0A7EfPSYhrUSV6meP9sjClJstHonTwtco19yEyQ00iDlM0Jpg')

//API

//App Config
const app = express();
//Middlewares
app.use(cors({origin:true}))
app.use(express.json())
//API routes

app.get('/',(request,response)=>{
    response.status(200).send('hello world')
})
app.post('/payments/create',async (request,response)=>{
    const total = request.query.total;
    let paymentIntent;
    total > 0
  ? (console.log('Payment received', total),
    (   
         paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'inr'
    })
    ),
    (console.log('firebase paymentIntent Object',paymentIntent)),
    response.status(201).send({
      clientSecret: paymentIntent.client_secret
    }))
  : (console.error('Payment should be > 0'),
    response.status(200).send({
      message: 'payment less than 0 not acceptable'
    }));

})
//Listen command

exports.api = functions.https.onRequest(app)

//http initialised example url: http://127.0.0.1:5001/clone-db-26f62/us-central1/api