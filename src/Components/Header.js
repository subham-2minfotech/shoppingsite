import React, { useEffect } from 'react'
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { categoryAction } from '../store/categoryReducer/categoryAction'

function Header({ productId }) {
  const category = useSelector(state => state.category)
  console.log('category------', category);
  const dispatch = useDispatch()

  useEffect(() => {
    const recipeUrl = 'http://127.0.0.1:3000/categories'
    const requestMetadata = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: (JSON.stringify())
    };
    fetch(recipeUrl, requestMetadata)
      .then(response => response.json())
      .then(data => {
        let dataToStore = JSON.stringify(data);
        console.log('dataToStore =====', dataToStore);
        localStorage.setItem('Data', dataToStore);
        const data1 = JSON.parse(localStorage.getItem('Data'))
        console.log('data==', data1)
        if (data1) {
          dispatch(categoryAction(data1))
        }
        else {
          dispatch(categoryAction(JSON.parse('null')))
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [dispatch])

  return (
    <div className='header'>
      <div className='headerupper'>
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
              <button className="restheaderCButton">Login</button>
            </div>
          </div>
        </div>
        <div className='headerupperC'></div>
      </div>
      <div className='headerlower'>
        <div className='headerlowerMain'>
          {
            category.map((value) => {
              return (
                <div key={value.id} className='headerlowerComponents'>
                  <button className='productbuton'>
                    <img onClick={() => productId(value.id)} width="65" height="65" src={value.image} alt={value.name} />
                  </button>
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
