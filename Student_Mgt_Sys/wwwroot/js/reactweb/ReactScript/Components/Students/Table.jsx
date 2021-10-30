import React, { Component } from 'react';  
import { Table, Button, Pagination } from 'semantic-ui-react';
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  

    DeleteStudent= () =>{  
     axios.delete('http://localhost:52564/Api/Student/Deletestudent?id='+this.props.obj.data.Id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    }  
  render() {
      console.log("data",this.props.obj.data) ; 
    return (  
        <tr>  
           
  
          <td>  
          <Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  

export default Table;  