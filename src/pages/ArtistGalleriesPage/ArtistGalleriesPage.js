import { useEffect,useState } from 'react';
import { useContext } from 'react';
import KidsGalleryNavBar from '../../components/KidsGalleryNavBar/KidsGalleryNavBar';
import Parse from 'parse';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './ArtistGalleriesPage.css';
import ArtworkModel from '../../model/ArtworkModel';
// import PictureCard from '../../components/PictureCard/PictureCard';
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import GalleryModel from '../../model/GalleryModel';
import GalleryCard from '../../components/GalleryCard/GalleryCard';

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
                const galleriesData= await galleryQuery.find();
                console.log('Galleries found', galleriesData);
                const fetchedGalleries=galleriesData.map(gallery=> new GalleryModel(gallery)) ; 
                
                
                const ArtWork = Parse.Object.extend('ArtWork');
                const artworkQuery = new Parse.Query(ArtWork);
                artworkQuery.include("galleryId", fetchedGalleries );
                const artworksData = await artworkQuery.find(); 
                console.log('ArtWork found', artworksData);

                setGalleries(fetchedGalleries);
                setartworks(artworksData.map(artwork=> new ArtworkModel(artwork)));
                
            }  catch(error) {
                // show an error alert
                console.error('Error while fetching data', error);
            }
            }
    
        if (activeUser){
            fetchData()
            // console.log(galleries[0]);
        }
       
    },[activeUser])

  

    if (!activeUser) {
        return <Redirect to="#/"/>
    }

    // console.log(artworks);


    // const artworksView = artworks.map(artwork => <Col key={artwork.id} lg={3} md={6}><PictureCard artwork={artwork}/></Col>)

    const galeriesView = galleries.map(gallery => <Col key={gallery.id} lg={3} md={6}><GalleryCard artworks={artworks.filter(artwork=> artwork["galleryId"].id=== gallery.id)} gallery={gallery} /></Col>)
    
    return (
        <div className="p-artistGalleries">
            <KidsGalleryNavBar onLogout={onLogout}></KidsGalleryNavBar>
            <Container>
           
            <Row>
            {galeriesView}
            {galeriesView}
            {galeriesView}
            {galeriesView}
            </Row>
            </Container>
         
           
        </div>
    );
}

export default ArtistGalleriesPage;