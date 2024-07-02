import { useState } from "react";
import Adminheader from "../common/Adminheader";
import { useEffect } from "react";
import "./Viewfeedback.css";


const Viewfeedback = () => {
     let [data,setData] = useState([]);
     let feedbackdata = async () => {
        let result = await fetch(`http://localhost:4500/viewfeedback`);
        result = await result.json();
        setData(result);
        console.log(result);
     }

     useEffect(()=>{
        feedbackdata();
     },[]);

     let delfeedback = async (id) =>{
        let result = await fetch(`http://localhost:4500/deletefeedback/${id}`,{
            method:'delete'
        });
        result = result.json();
        if(result){
            feedbackdata();
        }
     }

    return(
        <>
        <Adminheader/>
        
        <div className="row  viewfeedback-base ">
           <div className="col-10  viewfeedback-base2"> 
            <div className="col-12 p-5 viewfeedback-main">
                <div className="row  py-3 viewfeedback-heading">
                    <div className="col-10">CUSTOMER FEEDBACK</div>
                    
                </div>
                <div className="row p-5 viewfeedback-table">
                
                    <div className="row table-row ">
                        <div className="col-1 ">S no.</div>
                        <div className="col-2 ">Name</div>
                        <div className="col-2 ">Email</div>
                        <div className="col-2 ">Contact</div>
                        <div className="col-3 ">Feedback</div>
                        <div className="col-2 ">Action</div>
                    </div>
                    {
                        data.map((item,index)=>
                      <div className="row my-1 table-data">  
                        <div className="col-1 ">{index+1}</div>
                        <div className="col-2 ">{item.name}</div>
                        <div className="col-2 ">{item.email}</div>
                        <div className="col-2 ">{item.contact}</div>
                        <div className="col-3 ">{item.feedback}</div>
                        <div className="col-2 "><button className="btn btn-info del-button" onClick={()=> delfeedback(item._id)}>Delete</button></div>
                       </div>
                        )

                    }
                
               </div> 
            </div>
           </div> 
        </div>
        </>
    );
}

export default Viewfeedback;