import { useState } from "react";
import Adminheader from "../common/Adminheader";
import "./Addroom.css";


const Addroom = () => {

    let [rno,setRno] = useState("");
    let [price,setPrice] = useState("");
    let [image,setImage] = useState("");
    let [type,setType] = useState("");
    let [status,setStatus] = useState("");

    let convert = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result);
        };
    }
    let addroom = async () => {
        let result = await fetch(`http://localhost:4500/addroom`,{
            method:'post',
            crossDomain:true,
            body: JSON.stringify({rno,price,image,type,status}),
            headers:{
                'Content-Type':'application/json',
                "Accept":"application/json",
                "Access-Control-Allow-Origin":"+",
            },
        });
        result = await result.json();
        if (result){
            alert("Room added successfully");
            
        }
    }
    return(
        <>
        <Adminheader/>
    <div className="row   addroom-base">
    <div className="row  addroom-heading">
                <div className="col-3 ">ADD YOUR ROOM</div>
            </div>
        <div className="col-lg-6  addroom-main" >
             
            <div className="row mt-5 addroom-row"> 
                <div className="col-8 addroom-col"><input type="text" placeholder="Enter room number"
                     onChange={(e)=>setRno(e.target.value)} value={rno}/>
                </div>
            </div>    
                 <div className="row addroom-row">
                    <div className="col-8 addroom-col">
                    <input type="number" placeholder="Enter price"
                     onChange={(e)=>setPrice(e.target.value)} value={price}/>
                    </div>
                 </div>

                 <div className="row addroom-row justify-content-center">
                    <div className="col-8 addroom-col  ">
                    <input type="file" accept=".jpg, .png" onChange={convert}/>
                    </div>
                 </div>

                <div className="row addroom-row">
                    <div className="col-8 addroom-col">
                <select  onChange={(e)=>setType(e.target.value)} value={type}>
                    <option hidden> Room Type</option>
                    <option value="1 person">1 Person</option>
                    <option value="2 person">2 Person</option>
                    <option value="3 person">3 Person</option>
                    <option value="4 person">4 Person</option>
                </select>
                    </div>
                </div>

                <div className="row addroom-row">
                    <div className="col-8 addroom-col">
                <select  onChange={(e)=>setStatus(e.target.value)} value={status}>
                    <option hidden>Room Status</option>
                    <option value="Available">Available</option>
                    <option value="Not available"> Not Available</option>
                </select>
                    </div>
                </div>
                
                <div className="row addroom-row">
                    <div className="col-8 addroom-col">
                <button  className="addroom-button" onClick={addroom}>Add Room</button>
                    </div>
                </div>
        </div>
    </div>
   </>
   );
}

export default Addroom;