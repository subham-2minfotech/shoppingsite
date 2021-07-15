import React from 'react'
import Headerpper from '../Header/Headerupper'
import './Cart.css'
// import { useSelector } from 'react-redux'
import { useSelector} from 'react-redux'

function Cart() {
  // const cart = useSelector(state => state.cart)
  const cart = useSelector(state => state.cart)
  console.log('cart==== ', cart);
  return (
    <React.Fragment>
      <div className='headerpper'>
        <Headerpper />
      </div>
      <div className='main'>
        <div className='maindetails'>
          <div className='mycart'>
            My Cart
          </div>
        </div>
        <div className='mainproducts'>mainproducts</div>
        <div className='mainorder'>mainorder</div>
      </div>
    </React.Fragment>
  )
}

export default Cart
