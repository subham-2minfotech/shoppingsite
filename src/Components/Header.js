import React from 'react'
import './Header.css'

function Header() {
  
  const elements = [
    { 
      "name": 'Top Offer',
      "link": 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' 
    },
    { 
      "name": 'Grocery',
      "link": '	https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' 
    },
    { 
      "name": 'Mobiles',
      "link": 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' 
    },
    { 
      "name": 'Fashion',
      "link": 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100' 
    },
    { 
      "name": 'Electronics',
      "link": 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' 
    },
    { 
      "name": 'Home',
      "link": 'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' 
    },
    { 
      "name": 'Appliances',
      "link": '	https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' 
    }
  ];

  return (
    <div className='header'>
      <div className='headerupper'>
        <div className='headerupperA'></div>
        <div className='headerupperB'>
          <div className='logo'>
            <a href="/">
              <img width="75" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" class="_2xm1JU" />
            </a>
            <a class="_21ljIi" href="/plus">
              Explore
              <span class="_2FVHGh">Plus</span><img width="10" src="	https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="logo" />
            </a>
          </div>
          <div className='search'>
            <form
              class="searchBox"
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
              <button className="restheaderCButton">Login</button>
            </div>
          </div>
        </div>
        <div className='headerupperC'></div>
      </div>
      <div className='headerlower'>
        <div className='headerlowerMain'>
          {
            elements.map((value, index) => {
              return (
                <div key={index} className='headerlowerComponents'>
                  <img width="65" height="65" src={ value.link } alt={value.name} />
                  <div>{value.name}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div >
  )
}

export default Header
