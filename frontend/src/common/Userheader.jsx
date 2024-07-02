import './Userheader.css';
import { Link } from 'react-router-dom';

const Userheader = () => {
  let logout = () =>{
    localStorage.clear();
    
  }
 
    return( 
    <>
        <nav className='userheader-base '>
         <div className='logo'> <i className="fa-solid fa-bed"></i>
           </div>
            <div className='userheader-links'>
            <div className='userheader-box'><Link to="/userhome">Home</Link></div>
              <div className='userheader-box'><Link to="/room">Room</Link></div>
              <div className='userheader-box'><Link to="/mybooking/">My Booking</Link></div>
              <div className='userheader-box'><Link to="/Feedback">Feedback</Link></div>
              <div className='userheader-box'><Link onClick={ logout} to="/">Log-out</Link></div>
                
          </div>
        </nav>
    </>
    );
}


export default Userheader;