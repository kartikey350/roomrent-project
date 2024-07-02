import Adminheader from "../common/Adminheader";
import { useState,useEffect } from "react";
import "./Users.css";
import Footer from "../common/Footer";


const Users = () => {
     let [data,setData] = useState([]);
     let users = async () => {
        let result = await fetch(`http://localhost:4500/getusers`);
        result = await result.json();
        setData(result);
     }

     useEffect(()=>{
        users();
     },[]);

     let deluser = async (id) =>{
        let result = await fetch(`http://localhost:4500/deleteuser/${id}`,{
            method:'delete'
        });
        result = result.json();
        if(result){
            users();
        }
     }

    return(
        <>
        <Adminheader />
        <div className="row  m-auto justify-content-center viewusers-base self-align-center">
            <div className="col-md-10 p-5 viewusers-main">
                <table className="table">
                    <tr>
                        <th>S no.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    {
                      data.length>0 ?  data.map((item,index)=>
                      <tr>  
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{item.gender}</td>
                        <td>{item.address}</td>
                        <td><button className="btn btn-danger" onClick={()=> deluser(item._id)}>Delete</button></td>
                       </tr>
                        ) : 
                        <tr align="center">
                            <td colSpan="9">
                                <div className="user-data">No Data Found</div>
                            </td>
                        </tr>

                    }
                </table>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Users;