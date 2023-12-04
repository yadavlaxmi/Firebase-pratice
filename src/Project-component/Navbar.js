import React from "react";
import { Container } from "react-bootstrap";
import {Nav} from "react-bootstrap"
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom"
const MyNavbar=()=>{
    return(
        <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="/book/list">Add Listening
            </Nav.Link>

          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default MyNavbar