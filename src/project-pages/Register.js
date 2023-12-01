import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Form } from 'react-bootstrap';
import { useFirebase } from "../projectcontext/Firebase";
import {useNavigate} from "react-router-dom"

const RegisterPage = () => {
  const navigate=useNavigate();
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    if(firebase.isLoggedIn){
      navigate("/");
    }
  },[firebase,navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signing up a user...");
    try {
      const result = await firebase.signupUserWithEmailAndPassword(
        email,
        password
      );
      console.log("Success", result);
    } catch (error) {
      console.error("Error in registration", error);
    }
  };

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
