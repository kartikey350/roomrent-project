import Adminheader from "../common/Adminheader";
import "./Editroom.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Footer from "../common/Footer";



const Editroom = () => {
    let navigate = useNavigate();
    let params = useParams();
    let [rno,setRno] = useState("");
    let [price,setPrice] = useState("");
    let [image,setImage] = useState("");
    let [type,setType] = useState("");
    let [status,setStatus] = useState("");
    
    useEffect(()=>{
        editroom();
    },[]);

    let editroom = async () =>{
        console.log(rno,price,type,status,image);
        let result = await fetch(`http://localhost:4500/editroom/${params.id}`);
        result = await result.json();
        setRno(result.rno);
        setPrice(result.price);
        setType(result.type);
        setStatus(result.status);
        setImage(result.image);
    }
    

    let convert = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result);
        };
    }

    let updateroom = async() => {
        let result = await fetch(`http://localhost:4500/updateroom/${params.id}`,{
            method:'put',
            crossDomain:true,
            body: JSON.stringify({rno,price,image,type,status}),
            headers:{
                'Content-Type':'application/json',
                Accept:"application/json",
                "Access-Control-Allow-Origin":"+",
            },
        });
        result = await result.json();
        if (result){
            alert("Room updated successfully");
            
        }
        navigate('/viewroom');
    }
    
    return(
        <>
        <Adminheader/>
        
        <div className="row   editroom-base">
            <div className="col-md-6  editroom-main">
               <div className="row"> 
                <div className="col-12"><img src={image} height={200} width={400} /></div>
               </div> 


               <div className="row">
                 <div className="col-12 editroom-select"><input className="p-1 rounded-3" type="file" accept=".jpg, .png" onChange={convert}/></div>
               </div>

               <div className="row"> 
                 <div className="col-6 "><input className="p-1 rounded-3 " type="text" onChange={(e)=> setRno(e.target.value)} value={rno}/></div>
               </div>

               <div className="row"> 
                <div className="col-6"><input className="p-1 rounded-3" type="number" onChange={(e)=> setPrice(e.target.value)} value={price}/></div>
               </div> 

               <div className="row">
                <div className="col-6">
                <select className="p-1 rounded-3"  onChange={(e)=>setType(e.target.value)} value={type}>
                    <option className="editroom-select" hidden> Room Type</option>
                    <option className="editroom-select" value="1 person">1 Person</option>
                    <option className="editroom-select" value="2 person">2 Person</option>
                    <option className="editroom-select" value="3 person">3 Person</option>
                    <option className="editroom-select" value="4 person">4 Person</option>
                </select>
                </div>
               </div> 

               <div className="row"> 
                 <div className="col-6 "><select  className="p-1 rounded-3" onChange={(e)=>setStatus(e.target.value)} value={{status}}>
                    <option hidden>Room Status</option>
                    <option value="Available">Available</option>
                    <option value="Not available"> Not Available</option>
                </select></div>
               </div> 

                <button className="btn w-50 btn-primary" onClick={ updateroom }>Update Room</button>
            </div>
        </div>
<Footer/>
        </>
    );
}

export default Editroom;