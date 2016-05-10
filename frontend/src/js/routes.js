import React from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './views/Home/home_index.js'
import About from './views/About/about_index.js'
import Contact from './views/Contact/contact_index.js'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </Route>
  </Router>
)
