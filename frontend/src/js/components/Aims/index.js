import React from 'react'
import {Tabs, Tab} from 'react-materialize'

export default class Aims extends Component {
    return (
      <Tabs className='tab-demo z-depth-1'>
          <Tab title='Current amis'>Test 1</Tab>
          <Tab title='Aims completed'>Test 2</Tab>
          <Tab title='Aims deleted'>Test 3</Tab>
      </Tabs>
    )
  }
}