import React from 'react'
import'./Login.css'
export default function Login() {
  return (
   <>
   <div className='container'>
   <img className='image' src='/images/votelogo.jpg'/>
   <label className='label'>Email</label>
   <input className='input' type='email' name='user' required/>
   <label className='label'>Password</label>
   <input className='input' type='password' name='user' required/>
   <button className='button'>Log In</button>
   </div>
   
   </>
  )
}
