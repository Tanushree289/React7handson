import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=() =>{
  return (
    <div>
         <p id="heading">
              <Link className="one" to ="/">Home</Link>  
              <Link className="one" to ="/students">Students</Link>  
              <Link className="one" to ="/contactus">Contact Us</Link>  
            </p>
    </div>
  )
}
export default  Navbar;