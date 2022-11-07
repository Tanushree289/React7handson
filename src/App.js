// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import ContactUs from './components/ContactUs';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import Navbar from './components/Navbar';
import { useState } from 'react';



function App() {
  const [users,setUsers] = useState([]);
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/contactus" element = {<ContactUs/>}/>
      <Route path ='/students' element = {<Students users={users}/>}/>
      <Route path ='/students/addstudents' element={<AddStudent users={users} updateUsers={setUsers}/>}/>
      <Route path='/students/editstudent/:index' element={<EditStudent users={users} updateUsers={setUsers} />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
