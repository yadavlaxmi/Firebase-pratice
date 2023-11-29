import { useState } from "react";
import { useFirebase } from "./Context/Firebase";

const App = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const putDataNew = () => {
    firebase.putData("grandFather/Father/child", { id: 1, name: "laxmi", age: 19 });
  };

  const handleSignup = async () => {
    try {
      await firebase.signupUserWithEmailAndPassword(email, password);
      await firebase.putData("users/laxmi", { email, password });
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <>
      <h1>Firebase</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter password"
      />
      <button onClick={handleSignup}>Signup</button>
      <button onClick={putDataNew}>Trigger</button>
    </>
  );
};

export default App;
