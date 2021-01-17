import { useEffect,useState } from 'react';
import { useContext } from 'react';
import KidsGalleryNavBar from '../../components/KidsGalleryNavBar/KidsGalleryNavBar';
import Parse from 'parse';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './ArtistGalleriesPage.css';
import ArtworkModel from '../../model/ArtworkModel';
import PictureCard from '../../components/PictureCard/PictureCard';
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import GalleryModel from '../../model/GalleryModel';

function ArtistGalleriesPage(props) {
    const {onLogout} = props;
    const activeUser= useContext(ActiveUserContext);
    const [galleries, setGalleries]= useState([])
    const [artworks, setartworks]= useState([])

    //reading axios data from DB
    useEffect( ()=>{

       
            async function fetchData() {
            try {
                const Gallery = Parse.Object.extend('Gallery');
                const galleryQuery = new Parse.Query(Gallery);
                // query.equalTo("name", 'A string');
                // query.equalTo("createdBy", Parse.User.current());
                const galleries= await galleryQuery.find();
                console.log('Galleries found', galleries);
                setGalleries(galleries.map(gallery=> new GalleryModel(gallery)) );
                
                const ArtWork = Parse.Object.extend('ArtWork');
                const artworkQuery = new Parse.Query(ArtWork);
                // artworkQuery.equalTo("name", 'A string');
                // artworkQuery.equalTo("createdBy", Parse.User.current());
                // artworkQuery.equalTo("artwork", new Parse.File("resume.txt", { base64: btoa("My file content") }));
                artworkQuery.include("galleryId", galleries );
                const artworksData = await artworkQuery.find(); 
                console.log('ArtWork found', artworksData);
                setartworks(artworksData.map(artwork=> new ArtworkModel(artwork)) );
            }  catch(error) {
                // show an error alert
                console.error('Error while fetching data', error);
            }
            }
    
        if (activeUser){
            fetchData()
        }
       
    },[activeUser])

    if (!activeUser) {
        return <Redirect to="#/"/>
    }

    const artworksView = artworks.map(artwork => <Col key={artwork.id} lg={3} md={6}><PictureCard artwork={artwork}/></Col>)

    return (
        <div className="p-artistGalleries">
            <KidsGalleryNavBar onLogout={onLogout}></KidsGalleryNavBar>
            <Container>
            <p>Gallery 1</p>
            <Row>
            {artworksView}
            </Row>
            </Container>
         
           
        </div>
    );
}

export default ArtistGalleriesPage;