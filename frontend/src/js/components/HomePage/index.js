import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button } from 'react-materialize'

export default class HomePage extends Component {
  render () {
    return (
      <div>
        <h2>I am a Survivor</h2>
        <Link to={'/contact'}><Button waves='light'>Sign Up</Button></Link>
        <h2>I am a Supporter</h2>
        <Link to={'/about'}><Button waves='light'>Sign Up</Button></Link>
      </div>
    )
  }
}