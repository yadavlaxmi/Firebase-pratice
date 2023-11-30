import {createContext,useContext} from  "react";
import {initializeApp} from "firebase/app"
import {getAuth ,createUserWithEmailAndPassword} from "firebase/auth"
const FirebaseContext=createContext(null);
const firebaseConfig = {
    apiKey: "AIzaSyDxzKXXcsEG1cq-gsaJrDwWwH-8EqsqcAw",
    authDomain: "bookify-dc868.firebaseapp.com",
    projectId: "bookify-dc868",
    storageBucket: "bookify-dc868.appspot.com",
    messagingSenderId: "215225918544",
    appId: "1:215225918544:web:639e14eceaaa167add9d55"
  };
export const useFirebase=()=>useContext(FirebaseContext);
const firebaseApp =initializeApp(firebaseConfig);
const firebaseAuth=getAuth(firebaseApp);
export const FirebaseProvider=(props)=>{
const signupUserWithEmailAndPassword=(email , password)=>
createUserWithEmailAndPassword(firebaseAuth,email,password)
    return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}