import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCbmybfGOG5kv3RLD3oH3z6hnsctwrKOjA",
    authDomain: "my-project-5e792.firebaseapp.com",
    projectId: "my-project-5e792",
    storageBucket: "my-project-5e792.appspot.com",
    messagingSenderId: "1031093936719",
    appId: "1:1031093936719:web:42426548df724319d4c03a",
    dataBaseURL:"https://my-project-5e792-default-rtdb.firebaseio.com/"
    
  };
export const app = initializeApp(firebaseConfig);