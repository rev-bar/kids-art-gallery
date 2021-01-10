import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './KidsGalleryNavBar.css';

function KidsGalleryNavBar(props) {


    return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
    <Nav className="mr-auto">
      <Nav.Link href="#link">HomeLogo</Nav.Link>
      <Nav.Link href="#link">prop1</Nav.Link>
      <Nav.Link href="#link">prop2</Nav.Link>
      <Nav.Link href="#link">prop3</Nav.Link>
   </Nav>
    <Nav className="ml-auto">
      <Nav.Link href="#home">LogIn</Nav.Link>
      <Nav.Link href="#home">SignIn</Nav.Link>
      <Nav.Link href="#link">LogOut</Nav.Link>
    </Nav>
  
  </Navbar.Collapse>
</Navbar>
    

    );
}

export default KidsGalleryNavBar;