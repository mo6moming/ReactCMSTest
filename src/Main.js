import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Resource from './Resource/Resource'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/resource' component={Resource}/>
    </Switch>
  </main>
)

export default Main