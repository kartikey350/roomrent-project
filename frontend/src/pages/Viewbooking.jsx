import { Link } from "react-router-dom";
import Adminheader from "../common/Adminheader";
import { useEffect,useState } from "react";
import "./Viewbooking.css";

const Viewbooking = () => {
    let [booking,setBooking] = useState([]);
     

    let bookingdata = async () => {
       let result = await fetch(`http://localhost:4500/bookings`);
       result = await result.json();
       setBooking(result);
    }

    useEffect(()=>{
       bookingdata();
    },[]);  
    
    let delbooking = async (id) =>{
        if(window.confirm("Are you Sure?")){
            let result = await fetch(`http://localhost:4500/deletebooking/${id}`,{
            method:'delete'
        });
        result = result.json();
        if(result){
            bookingdata();
          }
        }
     }

     const searchbooking = async (e) => {
      let key = e.target.value;
      if(key){
        let result = await fetch(`http://localhost:4500/searchbooking/${key}`);
        result = await result.json();
        if(result){
          setBooking(result);
        }else{
          bookingdata();
        }
      }
     }
    
    return(
        <>
        
       <Adminheader/>
        
        <div className="row mt-5 ">
        <input className="viewbooking-serch rounded-4 text-dark m-5 " type="/search" placeholder="Search Booking"
        onChange={searchbooking}/>
            <div className="col-10 p-5 bg-secondary rounded-5 mx-5 ">
                <table className="table">
                  <tr>
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
                    <th>Action</th>
                  </tr>  
                  {
                    booking.length>0 ? booking.map((item,index)=>
                    <tr className="">
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{item.roomno}</td>
                        <td>{item.price}</td>
                        <td>{item.duration} Month</td>
                        <td>{item.type}</td>
                        <td>{item.bookingdate}</td>
                        <td><Link to="#" className="btn btn-info disabled"> {item.status}</Link></td>
                        <td>
                            <button className="btn btn-success"><Link to={"/editbooking/"+item._id}><i class="fa-solid text-dark fa-pen-to-square"></i></Link></button>
                            <button className="btn btn-danger" onClick={()=> delbooking(item._id)}><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    ): 
                    <tr>
                       <td>  <h1> No Booking Found</h1> </td>
                    </tr>
                  }
                </table>
            </div>
        </div>
        </>
    );
}

export default Viewbooking;