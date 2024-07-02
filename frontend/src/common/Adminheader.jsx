import './Adminheader.css';
import { Link } from 'react-router-dom';

const Adminheader = () => {
  let logout = () =>{
    localStorage.clear();
    
  }
    return( 
    <>
        <nav className='adminheader-base'>
         <div className='logo'> <i className="fa-solid fa-bed"></i>
           </div>
            <div className='adminheader-links'>
            <div className='adminheader-box'><Link to="/adminhome">Home</Link></div>
            <div className='adminheader-box'><Link to="/users">User</Link></div>
            <div className='adminheader-box'><Link to="/addroom">Add Room</Link></div>
            <div className='adminheader-box'><Link to="/viewroom">Room</Link></div>
            <div className='adminheader-box'><Link to="/viewbooking">Booking</Link></div>
            <div className='adminheader-box'><Link to="/viewfeedback">Feedback</Link></div>
            <div className='adminheader-box'><Link onClick={ logout} to="/">Log-out</Link></div>
                
          </div>
        </nav>
    </>
    );
}


export default Adminheader;