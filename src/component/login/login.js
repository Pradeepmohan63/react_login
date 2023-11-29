import React from 'react';
import './login.css'

const login = () => {
  return (
    <div className='signin'>
      <div className='details'>
        <h2>
          Login
        </h2>

        <div className='form'>
          <div className='input'>
            <input type="text" placeholder='Username' required/>
          </div>

          <div className='input'>
            <input type="text" placeholder='Password' required/>
          </div>

          <div className='down'>
            <h3>Forget Password ?</h3>
            <h3 className='show'>Signup</h3>
          </div>

          <div className='loginbtn'>
            <button >Login</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default login