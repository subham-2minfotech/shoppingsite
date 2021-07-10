import React, { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Popup from "./Components/login&signup/Popup";
import Productbycategory from './Components/products/Productbycategory'
import './HomePage.css'
import { useSelector } from 'react-redux'

function HomePage() {
  const isLogged = useSelector(state => state.isLogged)
  const [id, setId] = useState()
  let popup;
  popup = true;

  console.log('isLogged---', !isLogged);
  console.log('popup && isLogged', popup && !isLogged);

  let justPopup;
  (popup && !isLogged) ?
    justPopup = <Popup />
    :
    justPopup = <div />

  let Productcategory;
  ((id === 4) && isLogged) ? Productcategory = <Productbycategory productid={id} /> : Productcategory = null;

  console.log('id from App.js ------------', id);

  return (
    <div className='homepage'>
      <Header productId={setId} />
      {justPopup}
      {Productcategory}
      <Footer />
    </div>
  )
}

export default HomePage
