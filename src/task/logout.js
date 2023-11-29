// import {getDatabase,ref,set}from "firebase/database"
import {useEffect,useState} from "react"
import './App.css';
import {getAuth,onAuthStateChanged,signOut} from "firebase/auth"
import SignupPage from "./pages/Signup";
import {app} from "./Firebase/Firebase"
import SigninPage from "./pages/Signin";
// const db=getDatabase(app)
const auth=getAuth(app);
function App() {
  const[user,setUser]=useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if (user){
        console.log("Hello",user);
        setUser(user);
      }
      else{
        console.log("you are logged out")
        setUser(null);
      }
    })
  },[])
  if (user===null){
    return(
      <div className="App">
      <h1>Firebase aap</h1>
      {/* <button onClick={putData}>put data</button>

      <button onClick={signupUser}>create data</button> */}
      <SignupPage/>
      <SigninPage/>
    </div>
  );
    
  }
  // const signupUser=()=>{
  //   createUserWithEmailAndPassword
  //   (auth,"laxmiyadav21@gmail.com",
  //   "laxmi@123"
  //   ).then((value)=>console.log(value));
  // };
  // const putData=()=>{
  //   set(ref(db,"users/laxmi"),{
  //     id:1,
  //     name:"laxmi",
  //     age:"17",
  //   })
  // }
  return (
    <div className="App">
      <h1> hello {user.email}</h1>
      {/* <button onClick={putData}>put data</button>

      <button onClick={signupUser}>create data</button> */}
     <button onClick={()=>signOut(auth)}>Logout</button>
    </div>
  );
}

export default App;