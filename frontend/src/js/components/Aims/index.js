import React from 'react'
import {Tabs, Tab, Collection, CollectionItem, Input, Button} from 'react-materialize'

export default class Aims extends React.Component {

  constructor () {
    super()
    this.state = {
      current: [],
      removed: [],
      checked: []
    }
  }
  removeActivity (activity) {
    // delete the current aim from the current state
    const index = this.state.current.indexOf(activity)
    const firstHalf = this.state.current.slice(0, index)
    const secondHalf = this.state.current.slice(index + 1)
    const newArray = [].concat(firstHalf, secondHalf)
    const removed = this.state.removed

    removed.push(activity)
    console.log('remove2', removed)
    this.setState({
      current: newArray,
      removed: removed
    })

    this.state.current
    // add the current aim to the removed state
  }

  componentWillMount () {
    this.setState({
      current: this.props.current,
      removed: this.props.removed,
      checked: this.props.checked
    })
    console.log(this.state)
  }

  componentDidMount () {
    console.log(this.state)
  }
  check (activity) {
    const index = this.state.current.indexOf(activity)
    const firstHalf = this.state.current.slice(0, index)
    const secondHalf = this.state.current.slice(index + 1)
    const newArray = [].concat(firstHalf, secondHalf)
    const checked = this.state.checked

    checked.push(activity)
    this.setState({
      current: newArray,
      checked: checked
    })
  }

  undo (activity) {
    const index = this.state.removed.indexOf(activity)
    const firstHalf = this.state.removed.slice(0, index)
    const secondHalf = this.state.removed.slice(index + 1)
    const newArray = [].concat(firstHalf, secondHalf)
    const current = this.state.current

    current.push(activity)
    this.setState({
      removed: newArray,
      current: current
    })
  }

  removed () {
    return this.state.removed.map((activity) => {
      return (
        <CollectionItem>{activity}<Button onClick={this.undo.bind(this, activity)} className='delete-btn' waves='light'>Undo</Button></CollectionItem>
      ) }
    )
  }

  checked () {
    return this.state.checked.map((activity) => {
      return (
        <CollectionItem><Input name='group1' type='checkbox' value='yellow' label='Yes, I did it!' checked='checked' />{activity}</CollectionItem>
      ) }
    )
  }

  current () {
    return this.state.current.map((activity) => {
      return (
        <CollectionItem type='checkbox'><Input onClick={this.check.bind(this, activity)} name='group1' type='checkbox' label='Cmon!' />{activity}<Button onClick={this.removeActivity.bind(this, activity)} className='delete-btn' waves='light'>Delete</Button></CollectionItem>
      ) }
    )
  }

  render () {
    return (
      <Tabs className='tab-demo z-depth-1'>
        <Tab title='Current aims' active>
          <Collection>
            {this.current()}
          </Collection>
        </Tab>
        <Tab title='Aims completed'>
          <Collection>
            {this.checked()}
          </Collection>
        </Tab>
        <Tab title='Aims deleted'>
          <Collection>
            {this.removed()}
          </Collection>
        </Tab>
      </Tabs>
    )
  }
}

Aims.defaultProps = {
  current: [
    'Plant some flowers in your garden',
    'Go for a walk with your dog',
    'Read a new book',
    'Listen some new music'

  ],
  removed: [
    'Bake some muffins for your family',
    'Go to the sea'

  ],
  checked: [
    'Learn a new thing',
    'Have a coffee with your best friend',
    'Write a new article',
    'Do some photograpy'
  ]
}

