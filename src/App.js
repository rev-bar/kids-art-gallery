
import './App.css';
// import { Button } from 'bootstrap';

import { HashRouter, Route ,Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import GalleryOwnerPage from './pages/GalleryOwnerPage/GalleryOwnerPage';
import ArtistGalleriesPage from './pages/ArtistGalleriesPage/ArtistGalleriesPage';
import GalleryByIdPage from './pages/GalleryByIdPage/GalleryByIdPage';
import ActiveUserContext from './shared/ActiveUserContext';
import { useState } from 'react';
import Parse from 'parse';
import UserModel from './model/UserModel';
import GalleryOwnerArtistsPage from './pages/GalleryOwnerArtistsPage/GalleryOwnerArtistsPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ArtistPage from './pages/ArtistPage/ArtistPage';


function App() {

   const [activeUser,setActiveUser]= useState(Parse.User.current() ? new UserModel(Parse.User.current()) : null); 

  function handleLogin(loggedInUser) {
    setActiveUser(loggedInUser);
  }

  // console.log(activeUser);

  function handleLogout() {
    setActiveUser(null);
    Parse.User.logOut();
  }

 
  return (
    <> 
    {/* <Button variant="primary">Primary</Button> */}
    <ActiveUserContext.Provider value={activeUser}>
    <HashRouter>
      <Switch>
        <Route exact path= "/"><HomePage onLogout={handleLogout}/></Route>
        <Route exact path= "/Login"><LoginPage  onLogin={handleLogin}/></Route>
        <Route exact path= "/SignUp"><SignUpPage onLogin={handleLogin}/></Route>
        <Route exact path= "/GalleryOwner"><GalleryOwnerPage onLogout={handleLogout}/></Route>
        <Route exact path= "/GalleryOwnerArtists"><GalleryOwnerArtistsPage onLogout={handleLogout}/></Route>
        <Route exact path= "/ArtistGalleries"><ArtistGalleriesPage onLogout={handleLogout}/></Route>
        <Route exact path= "/ArtistGalleries/:galleryName"><GalleryByIdPage onLogout={handleLogout}/></Route>
        <Route exact path= "/AboutArtist"><ArtistPage onLogout={handleLogout}/></Route>
      </Switch>  
    </HashRouter> 
    </ActiveUserContext.Provider> 

    </>
  );
}

export default App;
