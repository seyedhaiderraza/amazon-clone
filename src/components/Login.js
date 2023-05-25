import React, { useState, } from 'react'
import  './Login.css'
import { Link, useNavigate  } from 'react-router-dom'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase'

const Login = () => {
  const navigate = useNavigate()
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')

  const signIn = (e)=>{
    console.log('login',email,password)
    e.preventDefault()
    //firebase login
    signInWithEmailAndPassword(auth, email, password)
    .then((userCreds)=>{
      const user = userCreds.user
      console.log(user)
      navigate('/')
    }).catch(error=>{
      alert(error.message);
    })
  }
  const register = (e)=>{
    e.preventDefault()
    //firebase register
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCreds)=>{
      const user = userCreds.user
      console.log(user)
      navigate('/')
    })
    .catch(error=>{
      alert(error.message);
    })
  }
  return (
    <div className="login">
        <Link to="/">
        <img  className="login_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png">
        </img>
        </Link>
        <div className="login_container">
          <h1>Sign In</h1>
          <form action="">
            <h5>Email</h5>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}  />
            <button type="submit" className="login_signInButton" onClick={signIn}>Sign In</button>
          </form>
          <p>
          You agree that any cause of action related to
           or arising out of your relationship with the
            Company must commence within ONE year after 
            the cause of action accrues. Otherwise, 
            such cause of action is permanently barred.
          </p>
          <button onClick={register} className='login_registerButton'>
          Create your Amazon Account
          </button>
        </div>
       
    </div>
  )
}

export default Login
