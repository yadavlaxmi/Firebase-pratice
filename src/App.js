import {useState} from "react"
import {useFirebase} from "./Context/Firebase"
const App=()=>{
  const firebase=useFirebase();
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  console.log("Firebase",firebase)
  return(
  <>
  <h1>firebase</h1>
  <input onChange={e=>setEmail(e.target.value)}
  value={email}
  type="email"
    placeholder="enter email "/>
  <input onChange={e=>setPassword(e.target.value)}
  value={password}
  type="passsword" 
  placeholder="enter password "/>
  <button onClick={()=>{
    firebase.signupUserWithEmailAndPassword(email,password)
    firebase.putData("users/"+ "laxmi",{email,password})
    }}>Signup</button>

  </>
  )
}
export default App