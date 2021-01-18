import { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import ActiveUserContext from '../../shared/ActiveUserContext';

import './KidsGalleryNavBar.css';

function KidsGalleryNavBar(props) {
  const { onLogout } = props;
  const activeUser= useContext(ActiveUserContext);
 

  if (activeUser) {
      // console.log (activeUser.role);
  }

    return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
    <Nav className="mr-auto">
      {/* <Nav.Link href="/">HomeLogo</Nav.Link> */}
      {activeUser && activeUser.role==="artist"  ? <Nav.Link href="#">About me</Nav.Link>  : null}
      {activeUser && activeUser.role==="artist"  ? <Nav.Link href="#/ArtistGalleries">My galleries</Nav.Link> : null}
      
      {activeUser && activeUser.role==="galleryOwner"  ? <Nav.Link href="#/GalleryOwner">Galleries</Nav.Link> : null}
      {activeUser && activeUser.role==="galleryOwner"  ? <Nav.Link href="#/GalleryOwnerArtists">Artists</Nav.Link> : null}   
   </Nav>
    <Nav className="ml-auto">
    {activeUser ? null:  <Nav.Link href="#/Login">LogIn</Nav.Link>}
    {activeUser ? null: <Nav.Link href="#">SignIn</Nav.Link>}
      {activeUser ? < Nav.Link href="#" onClick={() => onLogout()}>LogOut</Nav.Link>: null}
    </Nav>
  
  </Navbar.Collapse>
</Navbar>
    

    );
}

export default KidsGalleryNavBar;