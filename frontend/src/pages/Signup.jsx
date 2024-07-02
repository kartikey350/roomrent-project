import { useState } from "react";
import Header from "../common/Header";
import "./Signup.css";
import { useNavigate } from "react-router";


const Signup = () => {
    let navigate = useNavigate();
    let [name,setName] = useState("");
    let [contact,setContact] =useState("");
    let [email,setEmail] = useState("");
    let [address,setAddress] = useState("");
    let [gender,setGender] = useState("");
    let [password,setPassword] = useState("");

    let register = async () => {
        console.log(name,contact,email,address,gender,password);
        let result = await fetch(`http://localhost:4500/signup`,{
            method:'post',
            body: JSON.stringify({name,contact,email,address,gender,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        
        if (result){
            alert("signup succesful");
            navigate('/login');
        }
        else{
            alert("somthig went wrong..");
        }
    }
    return(
        <>
     <Header/>
     <form onSubmit={register}>
        <div className="registerbox" >
   <div className="register-form">
    <h2 className="register-h2">REGISTER</h2>
    <div className="signup-inputbox">
        <input type="text" required
        onChange={(e)=>setName(e.target.value)} value={name}/>
        <span className="register-span">FULL NAME</span>
        <i className="register-i"></i>
        </div>
    <div className="signup-inputbox">
        <input type="text" required
        onChange={(e)=>setContact(e.target.value)} value={contact}/>
        <span className="register-span">CONTACT</span>
        <i className="register-i"></i>
        </div> 
    <div className="signup-inputbox">
        <input type="text" required
        onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <span className="register-span">EMAIL</span>
        <i className="register-i"></i>
        </div> 
    <div className="signup-inputbox">
        <input type="address" required
        onChange={(e)=>setAddress(e.target.value)} value={address}/>
        <span className="register-span">ADDRESS</span>
        <i className="register-i"></i>
        </div>      
    <div className="signup-inputbox">
        <input type="password" required
        onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <span className="register-span">PASSWORD</span>
        <i className="register-i"></i>
        </div>
    <select className="signup-selectbox" required
    onChange={(e)=>setGender(e.target.value)} value={gender}>
        <option className="option" selected  >SELECT YOUR GENDER</option>
        <option className="option" value="male">Male</option>
        <option className="option" value="female">female</option>
         
        
        </select>
        <i className="select-i"></i>     
        <button className="register-submit" type="submit">SIGNUP</button> 
        </div>
   </div>
   </form>

        
        </>
    );
}

export default Signup;