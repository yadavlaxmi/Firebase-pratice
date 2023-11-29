import {useEffect,useState,createContext, useContext} from "react"
import {initializeApp} from "firebase/app"
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import {getDatabase,set,ref,get,child,onValue} from "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyCbmybfGOG5kv3RLD3oH3z6hnsctwrKOjA",
    authDomain: "my-project-5e792.firebaseapp.com",
    databaseURL: "https://my-project-5e792-default-rtdb.firebaseio.com",
    projectId: "my-project-5e792",
    storageBucket: "my-project-5e792.appspot.com",
    messagingSenderId: "1031093936719",
    appId: "1:1031093936719:web:29397fb06578b4f9d4c03a",
    databaseURL:"https://app-project-a91e6-default-rtdb.firebaseio.com"
};
const firebaseApp=initializeApp(firebaseConfig)
const firebaseAuth=getAuth(firebaseApp);
const database=getDatabase(firebaseApp)
const FirebaseContext=createContext(null);
export const useFirebase=()=>useContext(FirebaseContext)


export const FirebaseProvider=(props)=>{
    const [name,setName]=useState("")
    const signupUserWithEmailAndPassword=(email,password)=>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password)}
    const putData=(key,data)=>set(ref(database,key),data);
    // get(child(ref(database),"grandfather/father/child")).then(snapshot=>{
    //     console.log(snapshot.val())
    // })

    onValue(ref(database,"grandfather/father/child"),(snapshot)=>console.log(snapshot.val()));
        setName(snapshot.val().name)
    
    useEffect(()=>{
        onValue(ref(database,"grandfather/father/child"),(snapshot)=>console.log(snapshot.val()));
        setName(snapshot.val().name)
    
    },[])
    return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,putData}}>
           <h3>name is{name} </h3>
            {props.children}
        </FirebaseContext.Provider>
    )
}
