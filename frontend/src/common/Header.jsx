import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
  
  return (
    <>
 <div className='header-base py-2'>
 
 <div className='p-2 d-flex align-content-center justify-content-center animate-charcter1 '>Roomify !</div>

  <div className='row  justify-content-center header-main1 '>
    <div className='vertical-center  col-lg-2 col-md-4 col-sm-6'><Link to="/">Home</Link></div>
    <div className='vertical-center  col-lg-3 col-md-6 col-sm-9'><Link to="/">How it Works</Link></div>
    <div className='vertical-center  col-lg-2 col-md-4 col-sm-6'><Link to="/">Featurs</Link></div>
    <div className='vertical-center  col-lg-2 col-md-4 col-sm-6'><Link to="/">About US</Link></div>
  </div>
<div className='row justify-content-center header-main2'>
  <div className='vertical-center  col-lg-4 col-md-8 col-sm-11'>
  
             <div class="btn-group">
               <button type="button" className="btn btn-info text-cyan-100 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                 Sign-in
               </button>
               <ul class="dropdown-menu  header-drop ">
                 <li><Link to="/adminlogin" className="header-drop text-cyan-100 bg-transparent btn btn-info dropdown-item">Admin Sign-in</Link></li>
                 <li><Link to="/usersignin" className="header-drop text-cyan-100 bg-transparent dropdown-item">User Sign-in</Link></li>
               </ul>
             </div>
  </div>

  <div className=' vertical-center col-lg-5 col-md-8 col-sm-11'>
           <Link to="/signup"><button class="btn btn-outline-info" type="submit">Sign-Up</button></Link></div>
</div>
</div>

     
        
    </>
  )
}

export default Header
