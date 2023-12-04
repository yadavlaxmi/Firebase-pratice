import {createContext,useContext,useEffect,useState} from  "react";
import {initializeApp} from "firebase/app"
import {getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, onAuthStateChanged} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage,ref,uploadBytes} from "firebase/storage"
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
const firestore=getFirestore(firebaseApp)
const storage=getStorage(firebaseApp);
const GoogleProvider = new GoogleAuthProvider();
export const FirebaseProvider=(props)=>{
    const[user,setUser]=useState(null)
useEffect(()=>{
    onAuthStateChanged(firebaseAuth,(user)=>{
        if(user) setUser(user);
        else setUser(null);
    })
},[])
const signupUserWithEmailAndPassword=(email , password)=>
createUserWithEmailAndPassword(firebaseAuth,email,password)
 const signinUserWithEmailAndPass =(email,password)=>signInWithEmailAndPassword(firebaseAuth,email,password)

const signinWithGoogle=()=>signInWithPopup(firebaseAuth,GoogleProvider)
const handleCreateNewListening = (name,isbn,price,cover)=>{
    const imageRef=ref(storage,"uploads/images/")
}
const isLoggedIn=user ? true : false;
return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,
        signinUserWithEmailAndPass,
        signinWithGoogle,
        handleCreateNewListening,
        isLoggedIn}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}