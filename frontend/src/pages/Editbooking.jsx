import Adminheader from "../common/Adminheader";
import "./Editroom.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";



const Editbooking = () => {
    let navigate = useNavigate();
    let params = useParams();
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [contact,setContact] = useState("");
    let [rno,setRno] = useState("");
    let [price,setPrice] = useState("");
    let [duration,setDuration] = useState("");
    let [type,setType] = useState("");
    let [bookingdate,setBookingdate] = useState("");
    let [status,setStatus] = useState("");
    
    useEffect(()=>{
        editBooking();
    },[]);

    let editBooking = async () =>{
        
        let result = await fetch(`http://localhost:4500/editbooking/${params.id}`);
        result = await result.json();
        setName(result.name);
        setEmail(result.email);
        setContact(result.contact);
        setRno(result.roomno);
        setPrice(result.price);
        setDuration(result.duration);
        setType(result.type);
        setBookingdate(result.bookingdate);
        setStatus(result.status);
    }
    


    let updatebooking = async() => {
        let result = await fetch(`http://localhost:4500/updatebooking/${params.id}`,{
            method:'put',
             
            body: JSON.stringify({name,email,contact,rno,price,duration,type,bookingdate,status}),
            headers:{
                'Content-Type':'application/json',
                Accept:"application/json",
                "Access-Control-Allow-Origin":"+",
            },
        });
        result = await result.json();
        if (result){
            alert(" Updated successfully");
            
        }
        navigate('/viewbooking');
    }
    
    return(
        <>
        <Adminheader/>
        
        <div className="row   editroom-base">
            <div className="col-md-6  editroom-main">
                
               <div className="row"> 
                 <div className="col-6"><input type="text" onChange={(e)=> setName(e.target.value)} value={name} readOnly/></div>
               </div>

               <div className="row"> 
                <div className="col-6"><input type="text" onChange={(e)=> setEmail(e.target.value)} value={email} readOnly/></div>
               </div> 
               
               <div className="row"> 
                <div className="col-6"><input type="number" onChange={(e)=> setContact(e.target.value)} value={contact} readOnly/></div>
               </div>
               
               <div className="row"> 
                <div className="col-6"><input type="number" onChange={(e)=> setRno(e.target.value)} value={rno} readOnly/></div>
               </div>

               <div className="row"> 
                <div className="col-6"><input type="number" onChange={(e)=> setPrice(e.target.value)} value={price} readOnly/></div>
               </div>

               <div className="row"> 
                <div className="col-6"><input type="text" onChange={(e)=> setDuration(e.target.value)} value={duration} readOnly/></div>
               </div>

               <div className="row"> 
                <div className="col-6"><input type="text" onChange={(e)=> setType(e.target.value)} value={type} readOnly/></div>
               </div>

               <div className="row"> 
                <div className="col-6"><input type="text" onChange={(e)=> setBookingdate(e.target.value)} value={bookingdate} readOnly/></div>
               </div>
               <div className="row">
                <div className="col-6">
                <select onChange={(e)=>setStatus(e.target.value)} value={status}>
                    <option className="editroom-select" value="pending"> Pending</option>
                    <option className="editroom-select" value="Confirm">Confirm</option>
                    <option className="editroom-select" value="canceled">cancel</option>
                </select>
                </div>
               </div> 


                <button className="btn btn-primary" onClick={  updatebooking } >Update Status</button>
            </div>
        </div>

        </>
    );
}

export default Editbooking;