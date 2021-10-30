

import React, { Fragment,Component } from 'react';  
import { Table, Button, Pagination,Grid,Icon,Form,Input} from 'semantic-ui-react';
 import PersonalInfo from './PersonalInfo';
 import DeleteStudent from'./DeleteStudent';
 import { ChildSingleInput } from '../Forms/SingleInput';
 


export default class StudentsInfo extends Component {  

  constructor(props) {  
      super(props);  
      this.state = {
           business:[],
           openCreateModal: false,
           openDeleteModal: false,
           editstudentId:"",
           showEditSection: false,
           addeOrUpdate: "",

          
            addStudent: {
                id:"",
                Name:"",
                LastName:"",
                age:"",
                Date:"",
                Address:"",
                Room_No:"",
                Teacher_name:"",
                Year:""

               
              
           
           },
        }; 
        
        this.saveData=this.saveData.bind(this)
        this.deleteLanguage=this.deleteLanguage.bind()
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit=this.closeEdit.bind(this)
        this.updateStateData = this.updateStateData.bind(this)
        this.openNew=this.openNew.bind(this)
    
        this.CreateData=this.CreateData(this)
        
    }  
    componentDidMount(){  
      debugger;  
    
        console.log("Customers:fetchCustomerData")

   
    $.ajax({
        url: 'https://localhost:44306/api/student',
        headers: {
           // 'Authorization': 'Bearer ' + cookies,
            'Content-Type': 'application/json'
        },
        type: "GET",
        success: function (res) {
            console.log("load data",res)
            this.setState({ business: res.data });  
            debugger;  
           
        }.bind(this)
    })

    }

    saveData()
    {
        console.log("saveData",this.state.addStudent)
    
        
        $.ajax({
          url: 'https://localhost:44306/api/student/updateStudent',
          headers: {
             // 'Authorization': 'Bearer ' + cookies,
              'Content-Type': 'application/json'
          },
          type: "POST",
          data: JSON.stringify(this.state.addStudent),
          success: function (res) {

          console.log("Load Data",res)
          if (res.success == true) {
            console.log("getData",res.data)
           // TalentUtil.notification.show("Add Language sucessfully", "success", null, null)
           // this.props.loadData()

        } 
        else {
            //TalentUtil.notification.show("Langauage not update successfully", "error", null, null)
        }
         }.bind(this),
          error: function (res, a, b) {
            console.log(res)
            console.log(a)
            console.log(b)
        }  
        }); 
       this.setState({showEditSection: false}) 
       this.setState({ editstudentId:" "})   
        }



        CreateData()
        {
            console.log("Create",this.state.addStudent)
        
            
            $.ajax({
              url: 'https://localhost:44306/api/student/createStudent',
              headers: {
                 // 'Authorization': 'Bearer ' + cookies,
                  'Content-Type': 'application/json'
              },
              type: "POST",
              data: JSON.stringify(this.state.addStudent),
              success: function (res) {
    
              console.log("Load Data",res)
              if (res.success == true) {
                console.log("getData",res.data)
               // TalentUtil.notification.show("Add Language sucessfully", "success", null, null)
               // this.props.loadData()
    
            } 
            else {
                //TalentUtil.notification.show("Langauage not update successfully", "error", null, null)
            }
             }.bind(this),
              error: function (res, a, b) {
                console.log(res)
                console.log(a)
                console.log(b)
            }  
            }); 
           this.setState({showEditSection: false}) 
           this.setState({ editstudentId:" "})   
            }
    

    deleteLanguage(studentid) {
    
         console.log("stud",+ studentid);
       
        $.ajax({
            url: 'https://localhost:44306/api/student/DeleteStudent',
            headers: {
              
                'Content-Type': 'application/json'
            },
            type: "POST",
           data: JSON.stringify(studentid),
            success: function (res) {
                console.log(res)
                if (res.success == true) 
                { 
                  if (this.state.addeOrUpdate === "Create")
                        {
                            console.log("Deleted  sucessfully", "success", null, null)
                        }                    
                        else
                        {
                            //TalentUtil.notification.show("Language updated sucessfully", "success", null, null)
                        }                    
                      //  this.props.loadData()
                    } else {
                       // TalentUtil.notification.show("Language did not add successfully", "error", null, null)
                    }
            }.bind(this),
            error: function (res, a, b) {
                console.log(res)
                console.log(a)
                console.log(b)
            }
        })
    }
    openEdit(student) {
     
console.log("Open Edit",student.id)
        this.setState({
            showEditSection: true,
            editstudentId:student.id,
            addStudent: {
              id: student.id,
              Name: student.name,
              LastName:student.lastName,
              age:student.age,
              Date:student.date,
              Address:student.address,
              Room_No:student.room_No,
              Teacher_name:student.teacher_name,
              Year:student.year
             
          },  

        
        //  addeOrUpdate:"Update"
        })
        console.log("id" ,this.state.addStudent)
    }

    updateStateData(event) {
        const data = Object.assign({}, this.state.addStudent)
        console.log("Data",data)
         data[event.target.name] = event.target.value
         
         this.setState({
           addStudent:data
           
         })
         console.log("set",this.state.addStudent);
     }
 
     closeEdit() {
        console.log("close")
              this.setState({
                  showEditSection: false,
                
                  editstudentId:"",
              })
          }


          openNew() {
       
            console.log("new Open"),
            this.setState({
                showEditSection: true,
                addStudent: {
                    id:"",
                    Name:"",
                    lastname:"",
                    age:"",
                    Date:"",
                    Address:"",
                    Room_No:"",
                    Teacher_name:"",
                    Year:""
                  
               },
              addeOrUpdate:"Create"
            })
           
            
        }
    
   
    render() {
        console.log("id" ,this.state.editstudentId)
        console.log("bui",this.state.business)  
        return (
            this.state.showEditSection ? this.renderNew():this.renderDisplay()
        )
    }

        renderNew() {
            return(
                <div>

 

                  <div class='row'>
                 <div className='ui sixteen wide column'> 
                    <Grid columns='equal'>
                     <Grid.Column>
                      <ChildSingleInput
                        inputType="text"
                        name="Name"
                        value={this.state.addStudent.Name}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add student First name"
                        errorMessage="Please enter a valid Lastname"/>
                        
                        </Grid.Column> 
                        <Grid.Column>
                      <ChildSingleInput
                        inputType="text"
                        name="LastName"
                        value={this.state.addStudent.LastName}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add student Last name"
                        errorMessage="Please enter a valid Lastname"/>
                        </Grid.Column>


                        <Grid.Column> 
                        <ChildSingleInput
                        inputType="text"
                        name="age"
                       value={this.state.addStudent.age}
                        maxLength={80}
                        placeholder="Add student Age"
                        errorMessage="Please enter a valid Lastname"
                        />
                        </Grid.Column>
                   <Grid.Column>

                     <ChildSingleInput
                        inputType="text"
                        name="Date"
                       value={this.state.addStudent.Date}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add student date"
                        errorMessage="Please enter a valid Lastname"/>
                        </Grid.Column> 


                       <Grid.Column>
                        <ChildSingleInput
                        inputType="text"
                        name="Address"
                       value={this.state.addStudent.Address}
                        controlFunc={this.updateStateData}
                        maxLength={80}

                        placeholder="Add student Address"
                        errorMessage="Please enter a valid Lastname"/>
                        </Grid.Column>

                       <Grid.Column>
                        <ChildSingleInput
                        inputType="text"
                        name="Room_No"
                        value={this.state.addStudent.Room_No}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add student roomno"
                        errorMessage="Please enter a valid Lastname"/>
                        </Grid.Column>

                        <Grid.Column>
                        <ChildSingleInput
                        inputType="text"
                        name="Teacher_name"
                        value={this.state.addStudent.Teacher_name}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add student teacher Name"
                        errorMessage="Please enter a valid Lastname"/>
                        </Grid.Column>
                        <Grid.Column>
                        <ChildSingleInput
                        inputType="text"
                        name="Year"
                        value={this.state.addStudent.Year}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add student year"
                        errorMessage="Please enter a valid Lastname"/>
                        </Grid.Column>
                       
                         <Grid.Column>  
                        <button type="button" className="ui teal button" onClick={this.saveData}>Add</button>
                        <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
                        </Grid.Column>

                        
                        </Grid>
                        {this.renderDisplay()}
</div>
</div> 
</div>

            )
       
        }

        renderDisplay(){
            

        
      return (  

       
        <div>  
          <h4 align="center">Student List</h4>  
          
        
          

          <Table celled>
                        <Table.Header>
                            <Table.Row>
 
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Last Name</Table.HeaderCell>
                                <Table.HeaderCell>Address</Table.HeaderCell>
                                <Table.HeaderCell> Age</Table.HeaderCell>
                                <Table.HeaderCell>Birth Date</Table.HeaderCell>
                                <Table.HeaderCell> Year</Table.HeaderCell>
                                <Table.HeaderCell>Room No</Table.HeaderCell>
                                <Table.HeaderCell>Teacher</Table.HeaderCell>
                                {/* <Table.HeaderCell>Action</Table.HeaderCell>
                                <Table.HeaderCell>Action</Table.HeaderCell> */}
                                <Table.HeaderCell>
             <button type="button" className="ui teal button" onClick={this.openNew}>
             <Icon name='plus'/>
              Add</button>
              </Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
  
            
           
            <Table.Body>
                           
                               
                                {this.state.business.map((object) =>(

                              <Fragment>
                                 
                                  {this.state.editstudentId===Object.id ?(
                                     <Table.Row>
                                     <Table.Cell>
                                     <ChildSingleInput
                        inputType="text"
                        name="Name"
                        value={this.state.addStudent.name}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add Language"
                        errorMessage="Please enter a valid name"/>
                                         </Table.Cell>
                                         <Table.Cell>
                                         <ChildSingleInput
                        inputType="text"
                        name="LastName"
                        value={this.state.addStudent.lastname}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add student"
                        errorMessage="Please enter a valid Lastname"/>
                        </Table.Cell>

                        <Table.Cell>
                                     <ChildSingleInput
                        inputType="text"
                        name="age"
                        value={this.state.addStudent.age}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add Language"
                        errorMessage="Please enter a valid name"/>
                                         </Table.Cell>
                                         <Table.Cell>
                                     <ChildSingleInput
                        inputType="text"
                        name="Bdate"
                        value={this.state.addStudent.date}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add Language"
                        errorMessage="Please enter a valid name"/>
                                         </Table.Cell>

                                         <Table.Cell>
                                     <ChildSingleInput
                        inputType="text"
                        name="Address"
                        value={this.state.addStudent.address}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add Language"
                        errorMessage="Please enter a valid name"/>
                                         </Table.Cell>

                                         <Table.Cell>
                                     <ChildSingleInput
                        inputType="text"
                        name="Roomno"
                        value={this.state.addStudent.room_No}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add Language"
                        errorMessage="Please enter a valid name"/>
                                         </Table.Cell>

                                         <Table.Cell>
                                     <ChildSingleInput
                        inputType="text"
                        name="Teachername"
                        value={this.state.addStudent.teachername}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add Language"
                        errorMessage="Please enter a valid name"/>
                                         </Table.Cell>
                                         <Table.Cell>
                                     <ChildSingleInput
                        inputType="text"
                        name="Year"
                        value={this.state.addStudent.year}
                        controlFunc={this.updateStateData}
                        maxLength={80}
                        placeholder="Add Language"
                        errorMessage="Please enter a valid name"/>
                                         </Table.Cell>
                                         <Table.Cell>

<button type="button" class="ui blue basic button" onClick={this.saveData}>Update</button>
<button type="button"class="ui red basic button" onClick={this.closeEdit}>Cancel</button>

</Table.Cell>
                                         </Table.Row>
                               
                                ) :(
                                 <Table.Row key={object.id}>
 
                                 <Table.Cell>{object.name}</Table.Cell>
                                <Table.Cell>
                                    {object.lastName} 
                                </Table.Cell> 
                                <Table.Cell>
                                    {object.address} 
                                </Table.Cell>
                                <Table.Cell>
                                    {object.age} 
                                </Table.Cell>
                                <Table.Cell>
                                   {object.date}
                                  
                                </Table.Cell>
                                <Table.Cell>
                                    {object.year} 
                                </Table.Cell>
                                <Table.Cell>
                                    {object.room_No} 
                                </Table.Cell>
                                <Table.Cell>
                                    {object.teacher_name} 
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color='yellow' content='Edit' icon='edit'  onClick={()=>this.openEdit(object)}/></Table.Cell>
                                    <Table.Cell>  <Button color='red' content='Delete' icon ='trash' onClick={() => this.deleteLanguage(object.id)} />
                                </Table.Cell>
                            </Table.Row>
                                    )}
                                </Fragment>
                                ))}
                        </Table.Body>
             
          </Table>  
        </div>  
      );  
    }  
  }  