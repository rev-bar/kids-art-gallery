import { useEffect,useState } from 'react';
import { useContext } from 'react';
import KidsGalleryNavBar from '../../components/KidsGalleryNavBar/KidsGalleryNavBar';
import Parse from 'parse';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './ArtistGalleriesPage.css';
import ArtworkModel from '../../model/ArtworkModel';
import PictureCard from '../../components/PictureCard/PictureCard';
import { Col } from 'react-bootstrap';

function ArtistGalleriesPage(props) {
    const {onLogout} = props;
    const activeUser= useContext(ActiveUserContext);
    const [artworks, setartworks]= useState([])

    //reading axios data from DB
    useEffect( ()=>{

        if (activeUser){
            const ArtWork = Parse.Object.extend('ArtWork');
            const query = new Parse.Query(ArtWork);
            // query.equalTo("name", 'A string');
            // query.equalTo("createdBy", Parse.User.current());
            // query.equalTo("artwork", new Parse.File("resume.txt", { base64: btoa("My file content") }));
            // query.equalTo("galleryId", new Parse.Object("Gallery"));
            query.find().then((artworksData) => {
              // You can use the "get" method to get the value of an attribute
              // Ex: response.get("<ATTRIBUTE_NAME>")
              console.log('ArtWork found', artworksData);
              setartworks(artworksData.map(artwork=> new ArtworkModel(artwork)) );
            }, error => {
              console.error('Error while fetching ArtWork', error);
            });
        }
    },[activeUser])


    const artworksView = artworks.map(artwork => <Col key={artwork.id} lg={3} md={6}><PictureCard artwork={artwork}/></Col>)

    return (
        <div>
            <KidsGalleryNavBar onLogout={onLogout}></KidsGalleryNavBar>
            <p>ArtistGalleriesPage</p>
            {artworksView}
        </div>
    );
}

export default ArtistGalleriesPage;