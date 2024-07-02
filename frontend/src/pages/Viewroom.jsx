import "./Viewroom.css";
import Adminheader from "../common/Adminheader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Viewroom = () => {
    let [room,setRoom] = useState([]);
    let roomdata = async() => {
        let data = await fetch(`http://localhost:4500/getroom`);
        data = await data.json();
        setRoom(data);
            
    }
    useEffect(()=>{
        roomdata();
    },[]);
    let delroom = async (id) =>{
        let result = await fetch(`http://localhost:4500/deleteroom/${id}`,{
            method:'delete'
        });
        result = result.json();
        if(result){
            roomdata();
        }
     }
    return(
         
        <>
        <Adminheader/>
         
        <div className="row py-5 viewroom-baserow">
        <div className=" row">
            <div className="col-lg-12 col-md-6 col-sm-3 mb-5  viewroom-heading">BROWSE YOUR PROPERTY</div>
        </div>
                {
                    room.map((item,index)=>
            <div className="col-lg-3 col-md-6 col-sm-12 p-4 my-5 mx-4 viewroom-basecol ">
                    <div className="row ">
                    <div className="col-lg-12 col-md-6 col-sm-3 viewroom-image"><img src={item.image} width={300} height={200} alt='Room'/></div>
                </div>
                <div className="row mt-3 viewroom-content">
                    <div className="col-lg-4 col-md-3 col-sm-2">S No.</div>
                    <div className="col-1">:</div>
                    <div className="col-lg-5 col-md-3 col-sm-2">{ index+1 }</div>
                </div>
                <div className="row viewroom-content">
                    <div className="col-lg-4 col-md-3 col-sm-2">Room No.</div>
                    <div className="col-1">:</div>
                    <div className="col-lg-5 col-md-3 col-sm-2">{ item.rno }</div>
                </div>
                <div className="row viewroom-content">
                    <div className="col-lg-4 col-md-3 col-sm-2">Price</div>
                    <div className="col-1">:</div>
                    <div className="col-lg-5 col-md-3 col-sm-2">{ item.price }</div>
                </div>
                <div className="row viewroom-content">
                    <div className="col-lg-4 col-md-3 col-sm-2">Type</div>
                    <div className="col-1">:</div>
                    <div className="col-lg-5 col-md-3 col-sm-2">{ item.type }</div>
                </div>
                <div className="row viewroom-content">
                    <div className="col-lg-4 col-md-3 col-sm-2">Status</div>
                    <div className="col-1">:</div>
                    <div className="col-lg-5 col-md-3 col-sm-2">{ item.status }</div>
                </div>
                <div className="row mt-3 viewroom-button">
                    <div className="col-lg-3 col-md-6 col-sm-12  btn btn-danger"><Link to={"/editroom/"+item._id}>Edit</Link></div>
                    <div className="col-lg-3 col-md-6 col-sm-12 btn btn-info" onClick={()=> delroom(item._id)}>Delete</div>
                </div>
            </div>
                )
                 }
        </div>
        
        
        </>
    );
}
export default Viewroom;