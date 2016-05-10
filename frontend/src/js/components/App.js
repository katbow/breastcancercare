import React from 'react'
import Header from './Header/header_index.js'
import Footer from './Footer/footer_index.js'
import Goals from './Goals/index.js'

import '../../scss/style.scss'

const options = {
  logoUrl: 'img/rhino.png'
}

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header
          logoUrl={options.logoUrl}
          fluid
        />
        <Goals />
        <div className='header-spacing'></div>
          {this.props.children}
        <Footer logoUrl={options.logoUrl} />
      </div>
    )
  }
}
