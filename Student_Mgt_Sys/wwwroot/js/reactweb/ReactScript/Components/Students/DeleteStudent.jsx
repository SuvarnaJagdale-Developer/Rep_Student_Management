import React, { Component } from 'react';  
import {  Button, Header, Modal } from 'semantic-ui-react'

 
/************************************* 
 * Function to get approval to Delete the Customer
 **************************************/
 
 export default class StudentsInfo extends Component {  
 
  render()
  {
 
  return (
    <Modal
      open={this.props.open}
    ><Header>Delete Customer </Header>
      <Modal.Content>
        
          <Header>Are you sure ?</Header>
          
      </Modal.Content>
      <Modal.Actions>
        <Button color='black'>
          Cancel
        </Button>
        <Button
          content="Delete"
          color='red'
          icon='remove'
     
          negative
        />
      </Modal.Actions>
    </Modal>
  )
  }
}
 

