import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUserDetails } from '../../actions/actions_index.js'

import HomePage from '../../components/HomePage/'

export default class Home extends React.Component {
  render () {
    return (
      <Grid className='home'>
        <Row>
          <Col xs={12}>
            <div className='image-container'>
              <img src='img/rhino.png' />
            </div>
            <HomePage />
          </Col>
        </Row>
      </Grid>
    )
  }
}
