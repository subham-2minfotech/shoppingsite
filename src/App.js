import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Popup from "./Components/login&signup/Popup";
import Productbycategory from './Components/products/Productbycategory'
import './App.css'
function App() {
  const [login, setLogin] = useState('')
  const [id, setId] = useState()
  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('login'))
    setLogin(login)
  }, [])

  // const [popup, setPopup] = useState(true);
  let popup;
  popup = true;

  console.log('login---', !login);
  console.log('popup && login', popup && !login);

  let justPopup;
  (popup && !login) ?
    justPopup = <Popup />
    :
    justPopup = <div />
  
  let Productcategory;
  ((id === 4) && login) ? Productcategory = <Productbycategory productid={id}/> : Productcategory = null;

  console.log('id from App.js ------------', id);

  return (
    <div className='app'>
      <Header productId = {setId}/>
      {justPopup}
      {Productcategory}
      <Footer />
    </div>
  );
}

export default App;
