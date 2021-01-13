import { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './KidsGalleryNavBar.css';

function KidsGalleryNavBar(props) {
  const activeUser = useContext(ActiveUserContext);
  const { onLogout } = props;

    return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
    <Nav className="mr-auto">
      <Nav.Link href="#link">HomeLogo</Nav.Link>
      <Nav.Link href="#link">About me</Nav.Link>
      <Nav.Link href="#link">My galleries</Nav.Link>
      <Nav.Link href="#link">Galleries</Nav.Link>
      <Nav.Link href="#link">Artists</Nav.Link>
   </Nav>
    <Nav className="ml-auto">
      <Nav.Link href="#home">LogIn</Nav.Link>
      <Nav.Link href="#home">SignIn</Nav.Link>
      <Nav.Link href="#" onClick={() => onLogout()}>LogOut</Nav.Link>
    </Nav>
  
  </Navbar.Collapse>
</Navbar>
    

    );
}

export default KidsGalleryNavBar;