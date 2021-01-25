
import { useContext } from 'react';
import KidsGalleryNavBar from '../../components/KidsGalleryNavBar/KidsGalleryNavBar';
import ActiveUserContext from '../../shared/ActiveUserContext';
import { Redirect } from 'react-router-dom';
import GalleryModel from '../../model/GalleryModel';
import { useEffect,useState } from 'react';
import Parse from 'parse';
import './GalleryOwnerPage.css';
import { Col, Container, Row ,Button , Image } from 'react-bootstrap';
import OwnerGalleryCard from '../../components/OwnerGalleryCard/OwnerGalleryCard';
import UserModel from '../../model/UserModel';
import NewGalleryModal from '../../components/NewGalleryModal/NewGalleryModal';
// import EditGalleryModal from '../../components/EditGalleryModal/EditGalleryModal';


function GalleryOwnerPage(props) {
    const {onLogout} = props;
    const activeUser= useContext(ActiveUserContext);
    const [galleries, setGalleries]= useState([])
    const [artists, setArtists]= useState([])
    const [showModal, setShowModal] = useState(false);

    useEffect( ()=>{

        async function fetchData() {
        try {
            const Gallery = Parse.Object.extend('Gallery');
            const galleryQuery = new Parse.Query(Gallery);
            galleryQuery.equalTo("createdBy", Parse.User.current());
            const galleriesData= await galleryQuery.find();
            // console.log('Galleries found', galleriesData);
            const fetchedGalleries=galleriesData.map(gallery=> new GalleryModel(gallery)) ; 

            
            const User = new Parse.User();
            const ArtistQuery = new Parse.Query(User);
            ArtistQuery.equalTo("role","artist");

            const artistsData = await ArtistQuery.find(); 
            // console.log('Artists found', artistsData);
            const fetchedArtists=artistsData.map(artist=> new UserModel(artist)) ; 
                   
            setGalleries(fetchedGalleries);
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


    async function addContent(name, artist) {
        try{
            console.log(artist);
            const galleryArtist = artists.find(element => element.username=== artist)
            console.log(galleryArtist);
            // const pointer={"__type": "Pointer", "className": "_User", "objectId": galleryArtist.id}
            
            
            const Gallery = Parse.Object.extend('Gallery');
            const NewGallery = new Gallery();

            NewGallery.set('name', name);
            NewGallery.set('createdBy', Parse.User.current());
            NewGallery.set('artist', galleryArtist.parseUser);

            const parseGallery = await NewGallery.save();
            console.log('Gallery created');
            setGalleries(galleries.concat(new GalleryModel(parseGallery)));  
                
        }  catch(error) {
        // show an error alert
        console.error('Error while writing to DB:', error);
    }

    }

    async function deleteGallery(gallery) {
        try{
            // console.log(gallery.id);


            const ArtWork = Parse.Object.extend('ArtWork');
            const artworkQuery = new Parse.Query(ArtWork);
            artworkQuery.equalTo("galleryId", gallery.parsegallery );
            const artworksData = await artworkQuery.find(); 
                console.log(artworksData);

            if (artworksData.length >= 1){
                alert("This gallery is not empty- You can not delete it");
            }else{
                console.log("You can delete")
                const Gallery = Parse.Object.extend('Gallery');
                const galleryQuery = new Parse.Query(Gallery);
                const deleteThisGalley = await (galleryQuery.get(gallery.id))
                const deletedGalley = await deleteThisGalley.destroy();
                console.log('Deleted gallery');
                const index= galleries.indexOf(gallery);    

                if (index !== -1) {
                    let galeriesArrStart= galleries.slice(0,index);
                    let galeriesArrEnd= galleries.slice(index + 1);
                    console.log(galeriesArrStart);
                    console.log(galeriesArrEnd);
                    let newGaleries = galeriesArrStart.concat(galeriesArrEnd);
                    console.log(newGaleries);
                    setGalleries(newGaleries);

                }

            }
            

        }  catch(error) {
        // show an error alert
        console.error('Error while writing to DB:', error);
    }

    }

    async function editGallery(gallery,newArtistName,newGalleryName) {
        try{
            console.log(gallery);
            console.log(newArtistName);
            console.log(newGalleryName);
            const galleryArtist = artists.find(element => element.username=== newArtistName)
            
            // console.log(galleryArtist.parseUser);
            console.log(galleryArtist.parseUser);
            const Gallery = Parse.Object.extend('Gallery');
            const galleryQuery = new Parse.Query(Gallery);
            
            const editedgalery= await (galleryQuery.get(gallery.id))
            // console.log(editedgalery.get("name"));
            if (newGalleryName){
                editedgalery.set('name', newGalleryName);
            } 
        
            editedgalery.set('artist', galleryArtist.parseUser);

            const parseGallery = await editedgalery.save();
            console.log('Gallery edited ');
            console.log(parseGallery);

            const index= galleries.indexOf(gallery); 

            if (index !== -1) {
                let galeriesArrStart= galleries.slice(0,index);
                galeriesArrStart = galeriesArrStart.concat(new GalleryModel(parseGallery));
                let galeriesArrEnd= galleries.slice(index + 1);
                let newGaleries = galeriesArrStart.concat(galeriesArrEnd);
                setGalleries  (newGaleries);

              }
            

        }  catch(error) {
        // show an error alert
        console.error('Error while writing to DB:', error);
    }

    }
 
    if (!activeUser) {
        return <Redirect to="#/"/>
    }



    const galeriesView = galleries.map(gallery => <Col key={gallery.id} xl={3}  md={4}><OwnerGalleryCard deleteGallery={deleteGallery} editGallery={editGallery}gallery= {gallery} artists={artists} artist={artists.find(artist=> (artist.id=== gallery.artist.id ) )} /></Col>)
    
    return (
        <div  className="p-GalleryOwnerPage">
            <KidsGalleryNavBar onLogout={onLogout}></KidsGalleryNavBar>
            <p>{activeUser.username}'s galleries</p>
            <Container>
                <Row>
                <Button variant="info" onClick={() => setShowModal(true)} >
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFW8Goxnhxje8kvnJ4EzvnxpybClc1oiM4nQ&usqp=CAU"/>
                </Button> 
                {galeriesView}
                </Row>
           </Container>
           <NewGalleryModal show={showModal} handleClose={() => setShowModal(false)} addContent={addContent} artists={artists}/>
          
        </div>
    );
}

export default GalleryOwnerPage;