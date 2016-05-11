import React from 'react'
import { Row, Col } from 'react-materialize'
import Cards from './Cards.js'

export default class CardsList extends React.Component {
  constructor () {
    super()
    this.state = {
      activecard: '',
      displayCard: this.displayCard.bind(this),
      changeCard: this.changeCard.bind(this)
    }
  }
  componentWillMount () {
    this.setState({
      activecard: this.props.cards[0],
    })
  }
  saveForLater (title) {
    console.log('save', title)
    this.changeCard()
  }
  changeCard () {
    const index = this.props.cards.indexOf(this.state.activecard)
    this.setState({
      activecard: this.props.cards[index+1]
    })
  }
  notInterested (title) {
    console.log('no', title)
    this.changeCard()
  }
  acceptChallenge (title) {
    console.log('accept', title)
    this.changeCard()
  }
  displayCard () {
    return (
      <Cards
        author={this.state.activecard.author}
        type={this.state.activecard.type}
        title={this.state.activecard.title}
        details={this.state.activecard.details}
        imgUrl={this.state.activecard.imgUrl}
        acceptChallenge={this.acceptChallenge.bind(this)}
        saveForLater={this.saveForLater.bind(this)}
        notInterested={this.notInterested.bind(this)}
      />
    )
  }

  render () {
    return (
      <div className='card-list'>
        <Row>
          <Col s={10} m={8} l={6} offset='s1 m2 l3'>
            {this.displayCard()}

          </Col>
        </Row>
      </div>
    )
  }
}

CardsList.defaultProps = {
  cards: [
    {
      title: 'Wear something that makes you feel good',
      details: 'Dressing up can feel great! Put on something fancy or a bit different and it could give you a boost.',
      imgUrl: 'https://unsplash.com/photos/zv-3GbTGnzc',
      type: 'activity',
      author: 'Deidre, Breast Cancer Care Nurse',
      category: 'fun'
    },
    {
      title: 'Create a playlist of songs that make you feel good',
      details: 'You could even dance along!',
      imgUrl: 'https://unsplash.com/photos/7_Bau1vYR8I',
      type: 'activity',
      author: 'Kristina at Breast Cancer Care',
      category: 'fun'
    },
    {
      title: 'Make a facemask from scratch ',
      details: 'Feels even better when you use it knowing you made it!',
      imgUrl: 'http://www.marieclaire.com/beauty/how-to/a2830/best-homemade-face-masks/?zoomable',
      type: 'activity',
      author: 'Marie Claire',
      category: 'fun'
    },
    {
      title: 'Buy or do something nice for someone else ',
      details: 'Helping other people feel good helps you feel good too.',
      imgUrl: 'https://unsplash.com/photos/7pGehyH7o64',
      type: 'activity',
      author: 'Kath at Breast Cancer Care',
      category: 'fun'
    },
    {
      title: 'Have coffee with a friend',
      details: 'You can even go for a fancy coffee to really spice it up.',
      imgUrl: 'https://unsplash.com/photos/4qJdtfJ2MmQ',
      type: 'activity',
      author: 'Anna, a Breast Cancer Survivor',
      category: 'fun'
    },
    {
      title: 'Get your pencils out and spend some time colouring in.  ',
      details: 'Adult colouring books are a fantastic way to help your brain switch off while you focus on making beautiful images. Your local stationer should have some colouring books/magazines or print one from the internet - we love this one by blogger Valentina. ',
      imgUrl: 'https://farm4.staticflickr.com/3178/3111390259_fd8633e9ec_o_d.jpg',
      type: 'activity',
      author: 'The Team at Breast Cancer Care',
      category: 'mindfulness'
    },
    {
      title: 'Switch on your brain and do some Sudoku or Puzzles.',
      details: 'There\'s nothing like a puzzle to get the cogs turning - open a newspaper and do the Sudoku Puzzle, get a puzzle book or go online to find great puzzles or apps. Head over to the Guardian for a free printable Sudoku every day!',
      imgUrl: 'https://farm3.staticflickr.com/2265/2156513671_ecc1608819_b_d.jpg',
      type: 'activity',
      author: 'Kath at Breast Cancer Care',
      category: 'mindfulness'
    },
    {
      title: 'Download the "breathe to relax" app',
      details: 'Breathe2Relax is a portable stress management tool which provides detailed information on the effects of stress on the body and instructions and practice exercises to help users learn the stress management skill called diaphragmatic breathing. Get it here: https://itunes.apple.com/gb/app/breathe2relax/id425720246?mt=8',
      imgUrl: 'https://images.unsplash.com/photo-1437915219556-8c287594737a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=6e6e4bf9d6c2da99b27e084929d2864b',
      type: 'activity',
      author: 'Kristina at Breast Cancer Care',
      category: 'mindfulness'
    },
    {
      title: 'Learn about something new. ',
      details: 'Is there something you always wanted to learn about but never had the time? Take the time today to read up on a topic you\'ve always been interested in. History of India? Anatomy of a Bee? How the internet works? If you need over to the random page on Wikipedia and learn about something completely new!',
      imgUrl: 'https://images.unsplash.com/photo-1444730558009-b7f0368e1264?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=8cf5e203bce1912216e0ef8dfb131058',
      type: 'activity',
      author: 'The Team at Breast Cancer Care',
      category: 'mindfulness'
    },
    {
      title: '',
      details: 'Adult colouring books are a fantastic way to help your brain switch off while you focus on making beautiful images. Your local stationer should have some colouring books/magazines or print one from the internet - we love this one by blogger Valentina. ',
      imgUrl: 'https://farm4.staticflickr.com/3178/3111390259_fd8633e9ec_o_d.jpg',
      type: 'activity',
      author: 'The Team at Breast Cancer Care',
      category: 'mindfulness'
    }
  ]
}
