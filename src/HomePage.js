import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Popup from "./Components/Header/login&signup/Popup";
import Productbycategory from './Components/products/Productbycategory'
import './HomePage.css'
import { useSelector } from 'react-redux'

function HomePage() {
  const isLogged = useSelector(state => state.isLogged)
  let popup;
  popup = true;

  // console.log('isLogged (negative)--- ', !isLogged);
  // console.log('popup && !isLogged', popup && !isLogged);

  let justPopup;
  (popup && !isLogged) ?
    justPopup = <Popup />
    :
    justPopup = <div />

  return (
    <div className='homepage'>
      <Header />
      {justPopup}
      <Productbycategory />
      <Footer />
    </div>
  )
}

export default HomePage
