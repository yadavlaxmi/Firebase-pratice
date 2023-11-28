import React,{useState} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import {app} from '../Firebase/Firebase';

const auth=getAuth(app);

const SigninPage=()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
   const signinUser=()=>{
    signInWithEmailAndPassword(auth,email,password).then(value=>console.log("signin Success"))
    .catch((err)=>console.log(err));
   }
    return(
    
        <div className="signin-page">
            <h1> Signin</h1><br></br><br></br>
            <label>Enter your email</label>
            <input
             onChange={(e)=>setEmail(e.target.value)}
             value={email} 
             type="email" 
             placeholder="Enter your Email here"/>
           <br></br><br></br>
            <label>Enter your Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} 
            value={password}
            type="password" 
            placeholder="Enter your password here"/>
        <br></br><br></br>
        <button onClick={signinUser}>Signin</button>
        </div>
    )
}
export default  SigninPage;