import { useEffect ,useState,useContext } from 'react';
import { Col, Container , Row ,Button , Image} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ActiveUserContext from '../../shared/ActiveUserContext';
import KidsGalleryNavBar from '../../components/KidsGalleryNavBar/KidsGalleryNavBar';
import Parse from 'parse';
// import GalleryModel from '../../model/GalleryModel';
import ArtworkModel from '../../model/ArtworkModel';
import { Redirect } from 'react-router-dom';

import './GalleryByIdPage.css';
import PictureCard from '../../components/PictureCard/PictureCard';
import NewContentModal from '../../components/NewContentModal/NewContentModal';
// import PictureModal from '../../components/PictureModal/PictureModal';

function GalleryByIdPage(props) {
    const {onLogout} = props;
    const {galleryName} = useParams();
    const activeUser= useContext(ActiveUserContext);
    // const [gallery, setGallery]= useState([])
    const [artworks, setartworks]= useState([])
    const [showModal, setShowModal] = useState(false);
    const [gallery, setGallery] = useState([]);


    useEffect( ()=>{

        async function fetchData() {
            try {
                const Gallery = Parse.Object.extend('Gallery');
                const galleryQuery = new Parse.Query(Gallery);
                galleryQuery.equalTo("name", galleryName);
            
                const galleries= await galleryQuery.find();
                // console.log('Galleries found', galleries);
                setGallery(galleries );
                
                const ArtWork = Parse.Object.extend('ArtWork');
                const artworkQuery = new Parse.Query(ArtWork);
            
                artworkQuery.equalTo("galleryId", galleries[0]);
                const artworksData = await artworkQuery.find(); 
                // console.log('ArtWork found', artworksData);
                setartworks(artworksData.map(artwork=> new ArtworkModel(artwork)));
                
                
            }  catch(error) {
                // show an error alert
                console.error('Error while fetching data', error);
               }
            }

            if (activeUser){
                fetchData()
            }
    
    },[activeUser,artworks])

    // console.log(gallery[0].id);
    
    async function addContent(name, artwork) {
        try{
            console.log(name);
            console.log(artwork.name);
            console.log(gallery[0].id);
            const pointer={"__type": "Pointer", "className": "Gallery", "objectId": gallery[0].id}

            const ArtWork = Parse.Object.extend('ArtWork');
            const newArtWork = new ArtWork();
            newArtWork.set("name", name);
            newArtWork.set('createdBy', Parse.User.current());
            newArtWork.set('artwork', new Parse.File(artwork.name,artwork));
            newArtWork.set("galleryId",pointer);

            const parseArtwork = await newArtWork.save();
            console.log('ArtWork created');
            setartworks(artworks.concat(new ArtworkModel(parseArtwork)));           

        }  catch(error) {
        // show an error alert
        console.error('Error while writing to DB:', error);
    }

    }
    async function deleteArtwork(artwork) {
        try{
            console.log(artwork.id);
            const ArtWork = Parse.Object.extend('ArtWork');
            const query = new Parse.Query(ArtWork);
            
            const deleteArtwork= await (query.get(artwork.id))
            deleteArtwork.destroy().then(console.log('Deleted ArtWork'));
       

        }  catch(error) {
        // show an error alert
        console.error('Error while writing to DB:', error);
    }

    }

    if (!activeUser) {
        return <Redirect to="#/"/>
    }
    
    //prepering data for render
    const artworksView = artworks.map(artwork => <Col key={artwork.id} xl={2}  md={3} ><PictureCard deleteArtwork={deleteArtwork} artwork={artwork}/></Col>)


    return (
        <div className="p-GalleryByIdPage">
            <KidsGalleryNavBar onLogout={onLogout}></KidsGalleryNavBar>
            <Container>
                <p>{galleryName}</p> 
                <Row >
                <Button variant="info" onClick={() => setShowModal(true)}><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFW8Goxnhxje8kvnJ4EzvnxpybClc1oiM4nQ&usqp=CAU"/></Button> 
                    {artworksView}
                    {/* {artworksView}
                    {artworksView} */}
                 
                </Row>
            </Container>
            <NewContentModal show={showModal} handleClose={() => setShowModal(false)} addContent={addContent}/>   
            {/* <PictureModal show={showModal} handleClose={() => setShowModal(false)}/> */}

        </div>
    );
}

export default GalleryByIdPage;