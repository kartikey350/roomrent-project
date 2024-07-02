import { useState } from 'react';
import Userheader from '../common/Userheader';
import './Feedback.css';
import { useNavigate } from 'react-router';
import Footer from '../common/Footer';


const Feedback = () => {
    let navigate = useNavigate();
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [contact,setContact] = useState("");
    let [feedback,setFeedback] = useState("");

    let submitfeedback = async () => {
        let result = await fetch(`http://localhost:4500/feedback`,{
            method:'post',
            body: JSON.stringify({name,contact,email,feedback}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if (result){
            alert("Feedback submited successfull");
            navigate('/userhome');
        }
        else{
            alert("somthig went wrong..");
        }
    }
    return(
        <>
        <Userheader/>
        <div className='feedback-image'> 
       <div className='row  feedback-base'>
        <div className='feedback-heading'>FEEDBACK</div>
        <div className='col-md-12 feedback-main'>
            <form onSubmit={ submitfeedback}> 
            <input  type="text" placeholder='Enter your name' required
            onChange={(e)=>setName(e.target.value) } value={name}/>
            <input className='mt-3' type="email" placeholder='Enter your email' required
            onChange={(e)=>setEmail(e.target.value) } value={email}/>
            <input className='mt-3' type="number" placeholder='Enter your contact Number' required
            onChange={(e)=>setContact(e.target.value) } value={contact}/>
            <input className='mt-3' type="text" placeholder='Enter your Feedback' required
            onChange={(e)=>setFeedback(e.target.value) } value={feedback}/>
            <button className='mt-5' type='submit'>Submit</button>
            </form>
        </div>
       </div>
       
       </div>
       <Footer/> 
        </>
    );
}

export default Feedback;