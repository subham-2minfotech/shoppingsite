import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeScreen from "../HomePage";
import NotFoundPage from '../Components/NotFoundPage';
import Cart from '../Components/cart/Cart';


function AppRoute() {
  return (
    <Switch>
      <Route exact path='/' component={HomeScreen}/>      
      <Route exact path = '/cart' component={Cart} />
      <Route path='' component={NotFoundPage} />
    </Switch>
  )
}

export default AppRoute
