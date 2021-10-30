import React from 'react';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import StudentsInfo from './Components/Students/StudentsInfo';
import PersonalInfo from './Components/Students/PersonalInfo';
//import './custom.css'

function App() {
  /* return (
 <Layout>
               <Route exact path='/' component={StudentsInfo} />
               <Route exact path='/Students' component={StudentsInfo} />
               <Route path='/Classes' component={ClassInfo} />
               </Layout>
  );
} */
return (

  <div>
      
            <li className="nav-item">  
              <Link to={'/StudentsInfo'} className="nav-link">Student List</Link>  
            </li>  
            
        
     
      <Switch>  
        {/*  <Route exact path='/PersonalInfo' component={PersonalInfo} />  
       <Route path='/edit/:id' component={EditStudent} />   */}
        <Route path='/StudentsInfo' component={StudentsInfo} /> 
        <Route exact path='/PersonalInfo' component={PersonalInfo} />  
      </Switch>  
      </div>
 
);  
}
export default App;