import React,{useState} from "react";
import {getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
signInWithPopup,} from "firebase/auth"
import {app} from '../Firebase/Firebase';
const auth=getAuth(app)
const googleProvider= new GoogleAuthProvider()
const SignupPage=()=>{
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const createUser=()=>{
createUserWithEmailAndPassword(auth,email,password).then(value=>alert("success"));
    }
    const signupWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
    }
    return(
        <div className="signup-page">
            <h1>Signup</h1>
            <label>Email : </label>
            <input onChange={e=>setEmail(e.target.value)}
             value={email}
              type="email" 
              required 
              placeholder="Enter your email here"/><br></br><br></br>
            <label>password : </label>
            <input onChange={e=>setPassword(e.target.value)}
            value={password}
            type="password" 
            required 
            placeholder="Enter your password here"/>
       <br></br><br></br>
      
      <button onClick={signupWithGoogle}>signin with google</button>
      
       <button onClick={createUser}>signup</button>
        </div>
    )

}
export default SignupPage;