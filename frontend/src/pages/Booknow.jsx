import "./Booknow.css";
import Userheader from "../common/Userheader";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Footer from "../common/Footer";


const Booknow =  () =>{
    let navigate = useNavigate();
    let params = useParams();
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [contact,setContact] = useState("");
    let [roomno,setRoomno] = useState("");
    let [price,setPrice] = useState("");
    let [duration,setDuration] = useState(1);
    let [type,setType] = useState("");
    let [bookingdate,setBookingdate] = useState("");
    let status = "pending";
    let user = JSON.parse(localStorage.getItem('user'));
    

    
    let bookingdata = async () => {
        let result = await fetch(`http://localhost:4500/editroom/${params.id}`);
        result = await result.json();
        setRoomno(result.rno);
        setPrice(result.price);
        setType(result.type);
        setName(user.name);
        setEmail(user.email);
        setContact(user.contact);

    }
     useEffect(()=>{
        bookingdata();
     },[]);

     let bookroom = async (e) => {
        e.preventDefault();
        price = price*duration;
        let result = await fetch(`http://localhost:4500/booking`,{
            method:'post',
            body:JSON.stringify({name,email,contact,roomno,price,duration,type,status,bookingdate}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if (result){
            alert("Booking Request Send successfully");
            navigate('/room');
        }
        
     }

    return(
        <>
        <Userheader/>
        <div className="row m-auto  justify-content-center booknow-base">
            <div className="col-5  booknow-main">
                <h2 className="row justify-content-center align-content-center p-4 fs-2">Book Now</h2>
                <form onSubmit={ bookroom }>
              <div className="row mt-2 justify-content-center">
                    <div className="col-5"><input type="text" className="booknow-input" placeholder="Enter Your Name" required
                        onChange={(e)=>setName(e.target.value)} value={name}/>
                    </div>
                    <div className="col-5"><input type="email" className="booknow-input" placeholder="Enter Your Email" required readOnly
                        onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    </div>
              </div>

              <div className="row mt-3 justify-content-center ">
                    <div className="col-5"><input type="number" className="booknow-input" placeholder="Enter Your Number" required
                    onChange={(e)=>setContact(e.target.value)} value={contact}/>
                    </div>
                    <div className="col-5 mt-3">
                           <select required className="booknow-select" onChange={(e)=>setDuration(e.target.value)} value={duration}>
                           <option value="1 ">1 Month</option>
                           <option value="3 ">3 Month</option>
                           <option value="6 ">6 Month</option>
                           <option value="12">12 Month</option>
                           </select>
                    </div>
              </div>

              <div className="row mt-3 justify-content-center"> 
                    <div className="col-5">
                           <input type="text" className="booknow-input" readOnly 
                           onChange={(e)=>setRoomno(e.target.value)} value={roomno}/>
                    </div>
                    <div className="col-5">      
                           <input type="number" className="booknow-input" readOnly
                           onChange={(e)=>setPrice(e.target.value)} value={price}/>
                    </div>
              </div>           

              <div className="row mt-3 justify-content-center">
                    <div className="col-5">
                           <label>Select Your  Date</label>
                    </div>
                    <div className="col-5">
                           <label>Room Status</label>
                    </div>       
              </div>
            
              <div className="row mt-2 justify-content-center">
                    <div className="col-5">
                           <input type="date" className="booking-input" required
                          onChange={(e)=>setBookingdate(e.target.value)} value={bookingdate}/>
                    </div> 
                    <div className="col-5">
                           <input type="text" className="booking-input" readOnly 
                            onChange={(e)=>setType(e.target.value)} value={type}/>
                    </div>     
              </div>
                
              <div className="row mt-5 justify-content-center">
                  <div className="col-6"> 
                              <button className="btn btn-info" type="submit"  >Confirm</button>
                   </div>
              </div>
              </form>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Booknow;