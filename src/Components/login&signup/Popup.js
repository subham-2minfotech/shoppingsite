import React from 'react'
import './Popup.css'
import Signup from './Signup'

function Popup(props) {
  return (props.trigger === 'true') ? (
    <div className='popup'>
      <div className='popup-inner'>
        <Signup />
      </div>
    </div>
  ) : ('')
}

export default Popup
