import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeScreen from "../HomePage";
import NotFoundPage from '../Components/NotFoundPage';

function AppRoute() {
  return (
    <Switch>
      <Route exact path='/' component={HomeScreen}/>
      <Route path='' component={NotFoundPage} />
    </Switch>
  )
}

export default AppRoute
