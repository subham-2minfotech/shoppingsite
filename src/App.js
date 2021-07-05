import React, {useEffect, useState} from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Popup from "./Components/login&signup/Popup";
import './App.css'
function App() {
  const [login, setLogin] = useState('')

  useEffect(() => {
    localStorage.setItem('login', true);
    const login = localStorage.getItem('login')
    setLogin(login)
  }, [])

  const [popup, setPopup] = useState(false);

  console.log('login---', login);
  console.log(popup && login);

  let justPopup;
  (popup && login) ?
    justPopup = <Popup trigger={login} />
  :
    justPopup = <div/>


  return (
    <div className='app'>
      <Header />
      { justPopup }
      <Footer />
    </div>
  );
}

export default App;
