import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button } from 'react-materialize'

export default class HomePage extends Component {
  render () {
    return (
      <div>
        <h2>I'm a Survivor</h2>
        <Link to={'/survivorsignup'}><Button waves='light'>Sign Up</Button></Link>
        <h2>I'm a Supporter</h2>
        <Link to={'/supportersignup'}><Button waves='light'>Sign Up</Button></Link>
      </div>
    )
  }
}
