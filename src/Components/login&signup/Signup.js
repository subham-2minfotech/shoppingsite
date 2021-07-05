import React from 'react'
import './Signup.css'
import Signupform from './Signupform'
import Loginform from './Loginform'

function Signup() {
  return (
    <div className='signup'>
      <div className='signup-left'>
        <span>Looks like you're new here!</span>
        <p className='paragraph'>
          <span>Sign up with your mobile number to get started</span>
        </p>
      </div>
      <div className='signup-right'>
        {/* <Signupform /> */}
        <Loginform />
      </div>
    </div>
  )
}

export default Signup
