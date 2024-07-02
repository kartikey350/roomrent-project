import "./Viewroom.css";
import Userheader from "../common/Userheader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Rooms= () => {
    let [room,setRoom] = useState([]);
    let roomdata = async() => {
        let data = await fetch(`http://localhost:4500/getroom`);
        data = await data.json();
        setRoom(data);
            
    }
    useEffect(()=>{
        roomdata();
    },[]);

    const searchroom = async (e) => {
        let key = e.target.value;
        if(key){
          let result = await fetch(`http://localhost:4500/searchroom/${key}`);
          result = await result.json();
          if(result){
            setRoom(result);
          }else{
            roomdata();
          }
        }
       }
     
    return(
         
        <>
        <Userheader/>
         
        <div className="row py-5 viewroom-baserow">
            <input type="/search" className="rooms-search m-5 w-25 p-2 rounded-3 bg-secondary text-light" placeholder="SEARCH ROOMS" onChange={ searchroom} />
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
                    {
                    item.status==="Available" ? (
                    <div className="col-lg-4 col-md-6 col-sm-12 justify-content-center  btn btn-info"><Link to={"/booknow/"+item._id}>Book Now</Link></div>
                    ):
                    <></>
                         }
                </div>
            </div>
                )
                 }
        </div>
        
        
        </>
    );
}
export default Rooms;