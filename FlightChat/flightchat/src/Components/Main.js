import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Register from './Register/Register'
import Login from './Login/Login';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home/Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
    </Switch>
  </main>
)

export default Main