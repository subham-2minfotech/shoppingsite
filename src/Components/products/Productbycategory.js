import React, { useState, useEffect } from 'react'
import './Productbycategory.css'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../../store/cart/action'
import { useSelector } from 'react-redux'

function Productbycategory() {
  const [products, setProducts] = useState([])
  const productid = useSelector(state => state.productId)
  // const [user, setUser] = useState('')
  const dispatch = useDispatch();
  // (productid) ? 
  // const cart = useSelector(state => state.cart)
  // console.log('Cart Reducer details ----- ', cart);

  useEffect(() => {
    // console.log('productid----', productid);
    const recipeUrl = `http://127.0.0.1:3000/products/number-of-products/${productid}`
    const requestMetadata = {
      method: 'GET',
      Headers: {
        'Content-Type': 'application/json'
      },
      boby: (JSON.stringify())
    };
    fetch(recipeUrl, requestMetadata)
      .then(response => response.json())
      .then(data => {
        // console.log(`productid's product =`,data);
        setProducts(data)
      });
    // const login = JSON.parse(localStorage.getItem('login info'))
    // setUser(login)
  }, [productid])

  const addCart = (e) => {
    console.log('ADD TO CART LOG', e);
    dispatch(AddToCart(e))
  }

  const buyNow = () => {
    console.log('BUY NOW LOG');
  }

  // console.log('user--------', user.id);

  return (
    <React.Fragment>
      {
        products.map((value) => {
          return (
            <div key={value.id} className=' main'>
              <div className=' maininner'>
                <div className='photo'>
                  <img
                    className="photoinner"
                    alt={value.name}
                    src={value.image}
                  />
                </div>
                <div className='details'>
                  <div className='detailsinner'>
                    {value.name}
                  </div>
                  <div className='buttondiv'>
                    <button onClick={() => addCart(value.id)} className='addbutton'>ADD TO CART</button>
                    <button onClick={buyNow} className='buybutton'>BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }

    </React.Fragment>
  )
}

export default Productbycategory
