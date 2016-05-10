import React, { Component } from 'react'

import SignUp from '../../components/SignUp/'

export default class SurvivorSignup extends Component {
  render () {
    return (
      <SignUp
        buttonText='Text Message Sign up'
        mobileText='I want to get mobile updates'
        postcardText='I want to receive post cards to my home'
      />
    )
  }
}
