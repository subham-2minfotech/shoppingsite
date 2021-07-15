import React from 'react'
import './Header.css'
import Headerupper from './Headerupper'
import Headerlower from './Headerlower'

function Header() {

  return (
    <div className='header'>
      <div className='headerupper'>
        <Headerupper />
      </div>
      <div className='headerlower'>
        <Headerlower />
      </div>
    </div >
  )
}

export default Header
