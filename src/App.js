// import {getDatabase,ref,set}from "firebase/database"
import './App.css';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import {app} from "./Firebase/Firebase"
// const db=getDatabase(app)
const auth=getAuth(app);
function App() {
  const signupUser=()=>{
    createUserWithEmailAndPassword
    (auth,"laxmiyadav21@gmail.com",
    "laxmi@123"
    ).then((value)=>console.log(value));
  };
  // const putData=()=>{
  //   set(ref(db,"users/laxmi"),{
  //     id:1,
  //     name:"laxmi",
  //     age:"17",
  //   })
  // }
  return (
    <div className="App">
      <h1>Firebase aap</h1>
      <button onClick={signupUser}>create data</button>
    </div>
  );
}

export default App;
