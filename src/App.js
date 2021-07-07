import React, { useEffect, useState } from "react";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
import Popup from "./Components/login&signup/Popup";
import Productbycategory from './Components/products/Productbycategory'
import './App.css'
function App() {
  const [login, setLogin] = useState('')

  useEffect(() => {
    localStorage.setItem('login', false);
    const login = JSON.parse(localStorage.getItem('login'))
    setLogin(login)
  }, [])

  // const [popup, setPopup] = useState(true);
  let popup;
  popup = false;

  console.log('login---', !login);
  console.log('popup && login', popup && !login);

  let justPopup;
  (popup && !login) ?
    justPopup = <Popup />
    :
    justPopup = <div />


  return (
    <div className='app'>
      <Productbycategory />
      {/* <Header />
      {justPopup}
      <Footer /> */}
    </div>
  );
}

export default App;
