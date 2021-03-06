import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './views/Home/home_index.js'
import SurvivorSignup from './views/SurvivorSignup/survivorsignup_index.js'
import SupporterSignup from './views/SupporterSignup/supportersignup_index.js'
import SurvivorGoals from './views/Goals/goals_index.js'
import CardsPage from './views/Cards/cards_index.js'
import AimsList from './views/aimsList/aims_index.js'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/survivorsignup' component={SurvivorSignup} />
      <Route path='/supportersignup' component={SupporterSignup} />
      <Route path='/survivorgoals' component={SurvivorGoals} />
      <Route path='/cards' component={CardsPage} />
      <Route path='/aims' component={AimsList} />
    </Route>
  </Router>
)
