import {getDatabase,ref,set} from "firebase/database"
import './App.css';
import {app} from "./firebase";
const db=getDatabase(app)

function App() {
  const putData=()=>{
    set(ref(db,"users/laxmi"),{
      id:1,
      name:"laxmi",
      age:21,
    })
  }
  return (
    <div className="App">
      <h1>Firebase aap</h1>
      <button onClick={putData}>put data</button>
    </div>
  );
}

export default App;
