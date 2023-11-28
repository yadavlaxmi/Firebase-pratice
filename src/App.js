import { getDatabase, ref, set } from "firebase/database";
import './App.css';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import SignupPage from "./pages/Signup";
import { app } from "./Firebase/Firebase";
import SigninPage from "./pages/Signin";
import { useEffect, useState } from "react";

const db = getDatabase(app);
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const SignOut = (auth) => {
    
    auth.signOut().then(() => {
    }).catch((error) => {
      console.error(error);
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <SigninPage />
        <SignupPage />
      </div>
    );
  }

  // Uncommented code for signupUser and putData functions
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "laxmiyadav21@gmail.com",
      "laxmi@123"
    ).then((value) => console.log(value))
    .catch((error) => console.error(error));
  };

  const putData = () => {
    set(ref(db, "users/laxmi"), {
      id: 1,
      name: "laxmi",
      age: "17",
    }).then(() => console.log("Data added successfully"))
    .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <h1>Firebase app</h1>
      <button onClick={putData}>Put Data</button>
      <button onClick={signupUser}>Create User</button>
      <h1>Hello {user.email}</h1>
      <button onClick={() => SignOut(auth)}>Logout</button>
    </div>
  );
}

export default App;
