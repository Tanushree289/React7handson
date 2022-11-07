import React from 'react'
import { Link } from 'react-router-dom';
import withRouter from './HOC/withRouter';
import './student.css'

export class EditStudent extends React.Component {
    constructor(){
        super();
        this.state = {
            Name:'',
            Age:'',
            Course:'',
            Batch:'',
            showName:false
        }
    }

    updateName = (event) =>{
        this.setState({Name:event.target.value})
    }
    updateAge = (event) =>{
        this.setState({Age:event.target.value})
    }
    updateCourse = (event) =>{
        this.setState({Course:event.target.value})
    }
    updateBatch = (event) =>{
        this.setState({Batch:event.target.value})
    }
    handleShowName = () =>{
        const updateArray = [...this.props.users];
        const currentUser = {Name:this.state.Name,Age:this.state.Age,Course:this.state.Course,Batch:this.state.Batch}
        updateArray[this.props.params.index]=currentUser
        this.props.updateUsers(updateArray)
       this.setState({showName: true})
    }
    render(){
    return(
        <div>
        <div className='student1'>
        <div className='student'>
           <form >
        <input 
        type="text" 
        placeholder="Name" 
        required="required"
        value={this.state.Name} 
        onChange={this.updateName}
        />

       <input 
       type="number" 
       placeholder="Age" 
       required="required"
       value={this.state.Age} 
       onChange={this.updateAge}
       />

       <input 
       type="text" 
       placeholder="Course" 
       required="required"
       value={this.state.Course} 
       onChange={this.updateCourse}
       />

       <input 
       type="text" 
       placeholder="Batch"
       required="required"
       value={this.state.Batch} 
       onChange={this.updateBatch}
       />
        </form>
        </div>
        <div className='btn'>
        <Link to="/"><button className='btn1'>Cancel</button></Link>
        <Link to="/students"> <button  className='btn1' onClick={this.handleShowName}>Update</button></Link>
        </div>
        </div>
        {this.state.showName && 
        <p id="box2">
         {this.state.arr.map(item =>{
         return(
                 <p id='box'>{`Name :${item.Name} | Age : ${item.Age} | Course :${item.Course} | Age :${item.Batch} `}</p>
            )
         })
        }
        </p>
   }
       </div> 
        
    )
 }
}


export default withRouter(EditStudent) ;

