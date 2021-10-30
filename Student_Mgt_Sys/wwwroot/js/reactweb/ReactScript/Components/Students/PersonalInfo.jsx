import React, { Component } from 'react';
import { Form, Button, Modal, Dropdown,Label,Input } from 'semantic-ui-react'


export default class PersonalInfo extends Component 
{
   

    constructor(props) {
        super(props);
        this.state = {  
            name:'',  
            lastname:'',  
            age:'',  
            date:'',
            address:'',
            year:'',
            rollno:'',
            teachername:''  
            } 
            this.saveData=this.saveData.bind(this) 

    }
    saveData()
    {
        //console.log("saveData",this.state.addLanguage)
    
      
        $.ajax({
          url: 'https://localhost:44306/api/student/CreateStudent',
          headers: {
            //  'Authorization': 'Bearer ' + cookies,
              'Content-Type': 'application/json'
          },
          type: "POST",
          data: JSON.stringify(this.state.name,this.state.lastname,this.state.age,this.state.date),
          success: function (res) {

          console.log("Load Data",res)
          if (res.success == true) {
            console.log("getData",res.data)
           

        } 
        else {
          console.log("error")
        }
         }.bind(this),
          error: function (res, a, b) {
            console.log(res)
            console.log(a)
            console.log(b)
        }  
        }); 
      
        }
        handleChange= (e)=> {  
          this.setState({[e.target.name]:e.target.value});  
          }  

    render()
    {
         
            return ( 
                <div class="ui form">
                <div class="two fields">
                  <div class="field error">
                    <label>First Name</label>
                    <input placeholder="First Name" type="text" name="fname" onChange={this.handleChange} value={this.state.name}/>
                  </div>
                  </div>
                 

                  <div class="two fields">
                  <div class="field error">
                    <label>Last Name</label>
                    <input placeholder="Last Name" type="text" name="lname" onChange={this.handleChange} value={this.state.lastname}/>
                  </div>
                  </div>

                  <div class="two fields">
                  <div class="field error">
                    <label>age</label>
                    <input placeholder="age" type="text" name="age" onChange={this.handleChange} value={this.state.age}/>
                  </div>
                  </div>

                  <div class="two fields">
                  <div class="field error">
                    <label>date</label>
                    <input placeholder="date" type="text" name="date" onChange={this.handleChange} value={this.state.date}/>
                  </div>
                  </div>
                  <Button
          content="Create"
          labelPosition='right'
          icon='checkmark'
          onClick={() =>saveData()}
          positive
        />

                  </div>
            );
      

        
    }

}