
import './App.css';
// import { Button } from 'bootstrap';

import { HashRouter, Route ,Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import GalleryOwnerPage from './pages/GalleryOwnerPage/GalleryOwnerPage';
import ArtistGalleriesPage from './pages/ArtistGalleriesPage/ArtistGalleriesPage';
import GalleryByIdPage from './pages/GalleryByIdPage/GalleryByIdPage';
// import SignUpPage from './pages/SignUpPage/SignUpPage';
// import { Button } from 'bootstrap';


// import { ButtonGroup } from 'react-bootstrap';

function App() {
  return (
    <>
  {/* <Button variant="primary">Primary</Button> */}
    
    <HashRouter>
      <Switch>
        <Route exact path= "/"><HomePage /></Route>
        <Route exact path= "/Login"><LoginPage/></Route>
        {/* <Route exact path= "/SignUp"><SignUpPage/></Route> */}
        <Route exact path= "/GalleryOwner"><GalleryOwnerPage/></Route>
        <Route exact path= "/ArtistGalleries"><ArtistGalleriesPage/></Route>
        <Route exact path= "/ArtistGalleries/:id"><GalleryByIdPage/></Route>
        
      </Switch>  
    </HashRouter> 

    </>
  );
}

export default App;
