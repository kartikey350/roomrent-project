import { Link } from "react-router-dom";
import "./Adminlogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";


const Adminogin = () => {
    let navigate = useNavigate();
    let [username,setUsername] = useState('');
    let [password,setPassword] = useState('');
    let login = async () =>{
         try{
            let result = await fetch(`http://localhost:4500/adminlogin`,{
            method:'post',
            body: JSON.stringify({username,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if (result.username)
        {
            localStorage.setItem('admin',JSON.stringify(result));
            navigate('/adminhome');
        }
         }
         catch{
            alert("Email and password does not match")
         }
    }
    return(
    <>
<Header/>
         
        <div class="adminlogin-base">
        <div className="adminlogin-form" action="">
            <h2>Admin LOG-IN</h2>
             
            <div class="admin-inputbox">
                <input type="text" required
                onChange={(e) => setUsername(e.target.value)} value={username}/>
                <span>FULL NAME</span>
                <i></i>
            </div>
            <div class="admin-inputbox" required>
                <input type="password" required 
                onChange={(e) => setPassword(e.target.value)} value={password}/>
                <span>ENTER PASSWORD</span>
                <i></i>
            </div>
            <button className="admin-login-button" type="submit" onClick={ login }>LOGIN</button>
            
            <div class="admin-links">
                <Link to="#">FORGOT PASSWORD</Link>
                <Link to="/signup">SIGNUP</Link>
            </div>
        </div>
    </div>
    </>
    );
}

export default Adminogin;
