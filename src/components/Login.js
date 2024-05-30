import React, { useState } from 'react'
import Header from './Header';


const Login = () => {
  const [isSignform, setisSingform]=useState(true)
  const toggleSingform=()=>{
   setisSingform(!isSignform);
  }
 
  return (
    <div>
      <Header/>
    <div className='absolute'>
    <img src='/image/Bg.jpg'
    alt='logo'
    />
    </div>
    
      <form className='absolute  p-12 bg-black w-3/12 my-36 mx-auto  right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-6'>{isSignform ? "Sign In" : "Sign Up"}</h1>
        {  !isSignform && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>}
        <input type='text' placeholder='E-mail Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
     
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignform ? "Sign In" : "Sign Up"}</button>
        <p className='cursor-pointer ' onClick={toggleSingform}>{isSignform ? "New To Netflix? Sign Up Now " : "Already Registered? Sign In Now"}</p>
      </form>
   
   
    </div >
  )
}

export default Login;