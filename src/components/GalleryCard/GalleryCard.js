import { useEffect ,useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './GalleryCard.css';

function GalleryCard(props) {

    const {gallery, artworks} = props;
    // const [filterdArtwork, setFilterdArtwork]= useState([])
    // // console.log(artworks[0].galleryId);
    
    //   // console.log(artworks.length);
    // useEffect( ()=>{
    //     for (let i=0 ; i< artworks.length ; i++){
    //     // console.log(artworks);
    //     // console.log(gallery);
    //     console.log(artworks[0]);

    //         if  (gallery.id=== artworks[i].galleryId){
    //             setFilterdArtwork(filterdArtwork.concat(artworks[i])) 
    //         }
    //     }
        
    // },[artworks])   
    // debugger;
   if (artworks !== []){
    console.log(artworks[0]);
   }
   const buttonLink= "#/ArtistGalleries/"+ gallery.name
    
    return (
        <div className="c-gallery-card">
        <Card>
            <Card.Body>
                <Card.Title>{gallery.name}</Card.Title>
            </Card.Body>
            {/* <Card.Img variant="bottom" src={artworks[0].img} /> */}
            <Button href={buttonLink} variant="primary" >Go to {gallery.name} </Button>
        </Card>

    </div>
    );
}

export default GalleryCard;












