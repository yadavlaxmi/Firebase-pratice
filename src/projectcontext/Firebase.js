import {createContext,useContext} from  "react";
import {initializeApp} from "firebase/app"
import {getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
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
const GoogleProvider = new GoogleAuthProvider();
export const FirebaseProvider=(props)=>{
const signupUserWithEmailAndPassword=(email , password)=>
createUserWithEmailAndPassword(firebaseAuth,email,password)
 const signinUserWithEmailAndPass =(email,password)=>signInWithEmailAndPassword(firebaseAuth,email,password)

const signinWithGoogle=()=>signInWithPopup(firebaseAuth,GoogleProvider)
 return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,signinUserWithEmailAndPass,signinWithGoogle}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}