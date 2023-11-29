import {getDocs,getFirestore,collection,addDoc,doc,getDoc,query,where} from "firebase/firestore";
import {app} from "./Firebase/Firebase"
import "./App.css";
const firestore = getFirestore(app)
const App=()=>{
  const writeData=async()=>{
    const result= await addDoc(collection(firestore,"cities"),{
      name:"bengalore",
      pincode:555674,
      lat:123,
      long:456,
    });
    console.log("Result",result)
  }
  const makeSubCollection = async()=>{
    await addDoc(collection(firestore,"cities/6R3V1fpoHMQeJx4fmqtM/places"),{
      name:"This is place 2",
      desc:"Awsm Desc",
      date:Date.now()
    })
  };
  const getDocument=async()=>{
    const ref=doc(firestore,"cities","6R3V1fpoHMQeJx4fmqtM")
    const snap =await getDoc(ref);
    console.log(snap.data());

  }
  const getDocumentsByQuery=async()=>{
    const collectionRef=collection(firestore,"users");
    const q =query(collectionRef,where("isFemale","==",true))
   const snapshot= await getDocs(q);
    snapshot.forEach(data => console.log(data.data()));
  };
  return(

  <div>
      <h1>Firebase Data</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={makeSubCollection}>Put sub Data</button>
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getDocumentsByQuery}>Get Document by query</button>

  </div>
  )
}
export default App;