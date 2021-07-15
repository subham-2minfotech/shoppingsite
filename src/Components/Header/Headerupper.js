import React from 'react'
import './Header.css'
import LoginLogout from './login&signup/Login&logout'

function Headerupper() {
  return (
    <React.Fragment>
      <div className='headerupperA'></div>
      <div className='headerupperB'>
        <div className='logo'>
          <a href="/">
            <img width="75" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" className="_2xm1JU" />
          </a>
          <a className="_21ljIi" href="/plus">
            Explore
            <span className="_2FVHGh">Plus</span>
            <img width="10" src="	https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="logo" />
          </a>
        </div>
        <div className='search'>
          <form
            className="searchBox"
            action="/search" method="GET"
          >
            <div className="searchInner">
              {/* <input ></input> */}
            </div>
            <button className='button'>
              <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/4a90e2/search--v1.png" alt='search logo' />
            </button>
          </form>
        </div>
        <div className="restheader">
          <div className="restheaderA" >
            <a className="cart" href="/">
              <img width="20" height="20" src="https://img.icons8.com/material-outlined/24/ffffff/fast-cart.png" alt='cart' />
            </a>
            <span className="cart">Cart</span>
          </div>
          <div className="restheaderB" >More</div>
          <div className="restheaderC" >
            <LoginLogout />
          </div>
        </div>
      </div>
      <div className='headerupperC'></div>
    </React.Fragment>
  )
}

export default Headerupper
