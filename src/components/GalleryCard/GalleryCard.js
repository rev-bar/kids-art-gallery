import { useEffect ,useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ArtworkModel from '../../model/ArtworkModel';
import './GalleryCard.css';
import Parse from 'parse';

function GalleryCard(props) {

    const {gallery, artworks} = props;
   
    console.log(artworks);
   
   const buttonLink= "#/ArtistGalleries/"+ gallery.name
    
    return (
        <div className="c-gallery-card">
        <Card>
            <Card.Body>
                <Card.Title>{gallery.name}</Card.Title>
            </Card.Body>
          {artworks[0]?   <Card.Img variant="bottom" src={artworks[0].img} /> : null }
            <Button href={buttonLink} variant="primary" >Go to {gallery.name} </Button>
        </Card>

    </div>
    );
}

export default GalleryCard;












