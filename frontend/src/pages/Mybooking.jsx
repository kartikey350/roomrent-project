import Userheader from "../common/Userheader";
import { useEffect,useState } from "react";
import './Mybooking.css';

const Mybooking = () => {
    let [booking,setBooking] = useState([]);
    let user = JSON.parse(localStorage.getItem('user'));
    let email = user.email;

    let bookingdata = async () => {
       let result = await fetch(`http://localhost:4500/userbooking/${email}`);
       result = await result.json();
       setBooking(result);
    }

    useEffect(()=>{
       bookingdata();
    },[]);  
    

    
    return(
        <>
        
        <Userheader/>
        <div className="mybookingbase-image">
        <div className=" p-5 mybooking-base"> 
        <h1 className="fs-1 row justify-content-center text-info-emphasis fw-bolder mt-5">MY BOOKING</h1>
            <div className="col-10 bg-secondary p-4  m-5  mybooking-main">
                <table className="table justify-content-around p-5 table-hover  bg-secondary table-striped">
                  <tr className="text-light table-hover fs-5">
                    <th>S no.</th>
                    <th>name</th>
                    <th>email</th>
                    <th>contact</th>
                    <th>room no.</th>
                    <th>price</th>
                    <th>duration</th>
                    <th>type</th>
                    <th>bookingdate</th>
                    <th>status</th>
                  </tr>  
                  {
                    booking.length>0 ? booking.map((item,index)=>
                    <tr className="table-hover ">
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{item.roomno}</td>
                        <td>{item.price}</td>
                        <td>{item.duration} Month</td>
                        <td>{item.type}</td>
                        <td>{item.bookingdate}</td>
                        <td><button className="btn btn-info desabled"> {item.status}</button></td>
                    </tr>
                    ): 
                    <tr>
                       <td>  <h1> No Booking Found</h1> </td>
                    </tr>
                  }
                </table>
            </div>
        </div>
        </div>
        </>
    );
}

export default Mybooking;