import React, { Component } from 'react'

import SignUp from '../../components/SignUp/'

export default class SupporterSignup extends Component {
  render () {
    return (
      <SignUp
        buttonText='Next'
        mobileText='I want to send SMS updates to a survivor'
        postcardText='I want to send post cards to a survivor'
      />
    )
  }
}
