import { useEffect ,useState,useContext } from 'react';
import { Col, Container , Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ActiveUserContext from '../../shared/ActiveUserContext';
import KidsGalleryNavBar from '../../components/KidsGalleryNavBar/KidsGalleryNavBar';
import Parse from 'parse';
import GalleryModel from '../../model/GalleryModel';
import ArtworkModel from '../../model/ArtworkModel';

import './GalleryByIdPage.css';
import PictureCard from '../../components/PictureCard/PictureCard';

function GalleryByIdPage(props) {

    const {galleryName} = useParams();
    const activeUser= useContext(ActiveUserContext);
    // const [gallery, setGallery]= useState([])
    const [artworks, setartworks]= useState([])


    useEffect( ()=>{

       
        async function fetchData() {
        try {
            const Gallery = Parse.Object.extend('Gallery');
            const galleryQuery = new Parse.Query(Gallery);
            galleryQuery.equalTo("name", galleryName);
         
            const galleries= await galleryQuery.find();
            console.log('Galleries found', galleries[0].id);
            // setGallery(galleries.map(gallery=> new GalleryModel(gallery)) );
            
            const ArtWork = Parse.Object.extend('ArtWork');
            const artworkQuery = new Parse.Query(ArtWork);
          
            artworkQuery.equalTo("galleryId", galleries[0]);
            const artworksData = await artworkQuery.find(); 
            console.log('ArtWork found', artworksData);
            setartworks(artworksData.map(artwork=> new ArtworkModel(artwork)));
            
        }  catch(error) {
            // show an error alert
            console.error('Error while fetching data', error);
        }
        }

    if (activeUser){
        fetchData()
    }
   
},[activeUser])
// console.log(gallery);

    const artworksView = artworks.map(artwork => <Col key={artwork.id} lg={2} md={6}><PictureCard artwork={artwork}/></Col>)




    return (
        <div className="p-GalleryByIdPage">
            <KidsGalleryNavBar></KidsGalleryNavBar>
            <Container>
            <p> temp- GalleryByIdPage</p>
            <p>{galleryName}</p> 
            <Row>
            {artworksView}
            {artworksView}
            {artworksView}
            </Row>
            
            </Container>
        
        </div>
    );
}

export default GalleryByIdPage;