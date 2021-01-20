import { useContext } from 'react';
import KidsGalleryNavBar from '../../components/KidsGalleryNavBar/KidsGalleryNavBar';
import ActiveUserContext from '../../shared/ActiveUserContext';
import { Redirect } from 'react-router-dom';
// import GalleryModel from '../../model/GalleryModel';
import { useEffect,useState } from 'react';
import Parse from 'parse';
import { Col, Container, Row ,Button , Image } from 'react-bootstrap';
// import OwnerGalleryCard from '../../components/OwnerGalleryCard/OwnerGalleryCard';
import UserModel from '../../model/UserModel';
// import NewGalleryModal from '../../components/NewGalleryModal/NewGalleryModal';
import './GalleryOwnerArtistsPage.css';
import ArtistCard from '../../components/ArtistCard/ArtistCard';

import AddArtistModal from '../../components/AddArtistModal/AddArtistModal';


function GalleryOwnerArtistsPage(props) {
    const {onLogout} = props;
    const activeUser= useContext(ActiveUserContext);
    const [artists, setArtists]= useState([])
    const [showModal, setShowModal] = useState(false);
 
    useEffect( ()=>{
     
        async function fetchData() {
        try {
            
            const User = new Parse.User();
            const ArtistQuery = new Parse.Query(User);
            ArtistQuery.equalTo("role","artist");
            ArtistQuery.equalTo("parentId",Parse.User.current());

            const artistsData = await ArtistQuery.find(); 
            // console.log('Artists found', artistsData);
            const fetchedArtists=artistsData.map(artist=> new UserModel(artist)) ; 
                  
            setArtists(fetchedArtists);
            
        }  catch(error) {
            // show an error alert
            console.error('Error while fetching data', error);
        }
        }

        if (activeUser){
            fetchData()
        
        }
   
    },[activeUser])

    


    async function addContent(about, artistName,email,  pwd) {
        try{
            console.log(about);
            console.log(artistName);
            console.log(email);
            console.log(pwd);

            let sessionToken = Parse.User.current().get("sessionToken");

            const user = new Parse.User()
            user.set('username', artistName);
            user.set('email', email);
            user.set('role', "artist");
            user.set('parentId', Parse.User.current());
            user.set('password', pwd);
            user.set('about', pwd);

            const newArtistUser= await user.signUp();
            console.log('User signed up', user);
            setArtists(artists.concat(new UserModel (newArtistUser)));  

            Parse.User.become(sessionToken);
            
 
                
        }  catch(error) {
        // show an error alert
        console.error('Error while writing to DB:', error);
    }

    }
    if (!activeUser) {
        return <Redirect to="#/"/>
    }

    const artistsView = artists.map(artist => <Col key={artist.id} xl={3}  md={4}><ArtistCard artist= {artist}  /></Col>)

    return (
        <div className="p-GalleryOwnerArtistsPage">
            <KidsGalleryNavBar onLogout={onLogout}></KidsGalleryNavBar>
            <p>{activeUser.username}'s artists</p>
            <Container>
                <Row>
                    <Button variant="info" onClick={() => setShowModal(true)} >
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFW8Goxnhxje8kvnJ4EzvnxpybClc1oiM4nQ&usqp=CAU"/>
                    </Button> 
                    {artistsView}
                </Row>
            </Container>
            <AddArtistModal show={showModal} handleClose={() => setShowModal(false)} addContent={addContent}/>
        </div>
    );
}

export default GalleryOwnerArtistsPage;