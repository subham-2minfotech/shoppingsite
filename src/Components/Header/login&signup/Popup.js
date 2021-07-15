import React from 'react'
import './Popup.css'
import Signup from './Signup'

function Popup() {
  return (
  <div className='popup'>
    {console.log('Popup.js')}
    <div className='popup-inner'>
      <Signup />
    </div>
  </div>
  )
}

export default Popup
