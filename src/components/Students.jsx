import { Link } from "react-router-dom";
import React from "react";


const Students = (props) =>{
    
    return(
        <div>
             <h1 id="studentpage">Students Details</h1>
             <Link to='./addstudents'><button id="btn">Add new student</button></Link>
             <table border = '1'>
               <thead>
               <tr>
                    <th className="table1">Name</th>
                    <th >Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>              
               </thead>
               {props.users.map((contact,index)=>(
                <tr>
                <td>{contact.Name}</td>
                <td>{contact.Age}</td>
                <td>{contact.Course}</td>
                <td>{contact.Batch}</td>
                <Link to={`/students/editstudent/${index}`}><td>Edit</td></Link>
               </tr>
               ))}
             
              
             </table>
         
       
        </div>
    )
}
export default Students;
