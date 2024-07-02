import { Link } from "react-router-dom";
import "./UserSignin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
const Usersignin = () => {
    let navigate = useNavigate();
    let [email,setUsername] = useState();
    let [password,setPassword] = useState();
    let login = async () =>{
         try{
            let result = await fetch(`http://localhost:4500/login`,{
            method:'post',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if (result.email)
        {
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/userhome');
        }
         }
         catch{
            alert("Email and password does not match")
         }
         
    }
    return(
    <>
        <Header/>
         
            
        <div class="login-base">
        <div className="login-form" action="">
            <h2>LOG-IN</h2>
            <div class="inputbox">
               
                <input type="text" required
                onChange={(e) => setUsername(e.target.value)} value={email}/>
                <span>FULL NAME</span>
                <i></i>
            </div>
            <div class="inputbox" required>
                <input type="password" required 
                onChange={(e) => setPassword(e.target.value)} value={password}/>
                <span>ENTER PASSWORD</span>
                <i></i>
            </div>
            <button className="login-button" type="submit" onClick={login} >LOGIN</button>
            <div class="links">
                <Link to="#">FORGOT PASSWORD</Link>
                <Link to="/signup">SIGNUP</Link>
            </div>
        </div>
    </div>
           
    </>
    );
}

export default Usersignin;
