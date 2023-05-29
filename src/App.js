
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { StateContext } from './state/StateProvider';
import Payment from './components/Payment';
import { Elements} from '@stripe/react-stripe-js'
import {loadStripe} from "@stripe/stripe-js"
import Orders from './components/Orders';

const promise = loadStripe('pk_test_51NBviXSBPt9TBhsLRap4XBU5KjqmvieNaQYdOLgFa2sNyTHr73riUiGf5p9CaQfp8XNygfoBuRlOtYRrpA7D7FzX00iOgj3FhO')
function App() {
  const {user,login,logout} = useContext(StateContext)
  useEffect(()=>{

    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        console.log('User logged in:', user.email);
        login(user)
      } else {
        // User is logged out
        console.log('User logged out');
        logout()
      }
    });
  },[])
  return (
    <>
   
    <Router>
    <div className="App">
   
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/checkout" element={<Checkout/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/orders" element={<Orders/>} />
       <Route path="/payment" element={
        <Elements stripe={promise}>
          <Payment/>
        </Elements>
       } />
      </Routes>
   
    </div>
    </Router>
    </>
  );
}

export default App;
