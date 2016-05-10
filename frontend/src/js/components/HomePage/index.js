import React, { Component } from 'react'
import { Link } from 'react-router'

import Button from './Button.js'

export default class HomePage extends Component {
  render () {
    return (
      <div>
        <h2>I am a Survivor</h2>
        <Link to={'/contact'}><Button buttonText='Sign Up'/></Link>
        <h2>I am a Supporter</h2>
        <Link to={'/about'}><Button buttonText='Sign Up'/></Link>
      </div>
    )
  }
}
