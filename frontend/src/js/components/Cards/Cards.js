import React from 'react'
import { Card, CardTitle } from 'react-materialize'


export default class MotivationCard extends React.Component {
  render () {
    return (
      <Card className='small'
        header={<CardTitle image='img/walking-1.jpg'>{this.props.title}</CardTitle>}
        actions={[ <span><a href='#'>I want to do this!! </a> </span>,
          <span> <a href='#'>I might want to do this!! </a> </span>,
          <a href='#'>I will never do this !! </a> ]}
      >
        {this.props.details}
      </Card>
    )
  }
}

MotivationCard.defaultProps = {
  title: 'Do some light exercise',
  details: ''
}
