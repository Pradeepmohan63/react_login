import React from 'react'
import './register.css'

const register = () => {
  return (
    <div className='register'>
         <div className='details1'>
        <h2>
          Signup
        </h2>

        <div className='form1'>
          <div className='input1'>
            <input type="text" placeholder='Enter your email' required/>
          </div>

          <div className='input1'>
            <input type="text" placeholder='Create a password' required/>
          </div>

          <div className='input1'>
            <input type="text" placeholder='Confirm your password' required/>
          </div>


          <div className='signupbtn'>
            <button >Signup</button>
          </div>

          <div className='direct'>
            <h3>Already have an account?<span> Login</span></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default register