import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './views/Home/home_index.js'
import About from './views/About/about_index.js'
import Contact from './views/Contact/contact_index.js'
import SurvivorSignup from './views/SurvivorSignup/survivorsignup_index.js'
import SupporterSignup from './views/SupporterSignup/supportersignup_index.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/survivorsignup' component={SurvivorSignup} />
    <Route path='/supportersignup' component={SupporterSignup} />
  </Route>
)
