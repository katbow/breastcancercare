import React from 'react'
import {Tabs, Tab, Collection, CollectionItem, Input, Button} from 'react-materialize'

export default class Aims extends React.Component {
  render () {
    return (
      <Tabs className='tab-demo z-depth-1'>
        <Tab title='Current aims'>
          <Collection>
            <CollectionItem type='checkbox'><Input name='group1' type='checkbox' label='Cmon!' />Plant some flowers in your garden<Button waves='light'>Delete</Button></CollectionItem>
            <CollectionItem><Input name='group1' type='checkbox' label='Cmon!' />Go for a walk with your dog<Button waves='light'>Delete</Button></CollectionItem>
            <CollectionItem><Input name='group1' type='checkbox' label='Cmon!' />Read a new book<Button waves='light'>Delete</Button></CollectionItem>
            <CollectionItem><Input name='group1' type='checkbox' label='Cmon!' />Listen some new music<Button waves='light'>Delete</Button></CollectionItem>
          </Collection>
        </Tab>
        <Tab title='Aims completed'>
          <Collection>
            <CollectionItem><Input name='group1' type='checkbox' value='yellow' label='Yes, I did it!' checked='checked' />Learn a new thing</CollectionItem>
            <CollectionItem><Input name='group1' type='checkbox' value='yellow' label='Yes, I did it!' checked='checked' />Have a coffee with your best friend</CollectionItem>
            <CollectionItem><Input name='group1' type='checkbox' value='yellow' label='Yes, I did it!' checked='checked' />Write a new article</CollectionItem>
            <CollectionItem><Input name='group1' type='checkbox' value='yellow' label='Yes, I did it!' checked='checked' />Do some photograpy</CollectionItem>
          </Collection>
        </Tab>
        <Tab title='Aims deleted'>
          <Collection>
            <CollectionItem>Bake some muffins for your family</CollectionItem>
            <CollectionItem>Go to the sea</CollectionItem>
          </Collection>
        </Tab>
      </Tabs>
    )
  }
}